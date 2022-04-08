import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTip } from '../redux/tip/tipActions';
export const TipTotal = () => {
  const bill = useSelector((state) => state.bill);
  const tip = useSelector((state) => state.tip);
  const numPeople = useSelector((state) => state.numPeople);

  const dispatch = useDispatch();

  // calculate tip amount per person
  const calcTipAmount = (bill, tip, numPeople) => {
    if (numPeople !== '') {
      let calc = bill * (tip / 100 / numPeople);
      return calc.toFixed(2);
    } else {
      return '0.00';
    }
  };

  // calculate total bill amount per person
  const calcTotal = (bill, tip, numPeople) => {
    if (numPeople !== '') {
      let tipAmount = bill * (tip / 100);
      let calc = parseInt(bill) + parseInt(tipAmount);
      let final = calc / numPeople;
      return final.toFixed(2);
    } else {
      return '0.00';
    }
  };

  const checkState = () => {
    if (bill === '' && tip === '' && numPeople === '') {
      return true;
    }
    return false;
  };

  // change button color dependent on if all inputs are empty
  const changeButtonColor = () => {
    if (bill === '' && tip === '' && numPeople === '') {
      return 'reset-disabled';
    }
    return '';
  };

  return (
    <div className="tip-total">
      <div className="tip-person-wrapper">
        <h2>
          Tip Amount <span>/ person</span>
        </h2>
        <h1>${calcTipAmount(bill, tip, numPeople)}</h1>
      </div>
      <div className="tip-person-wrapper">
        <h2>
          Total<span>/ person</span>
        </h2>
        <h1>${calcTotal(bill, tip, numPeople)}</h1>
      </div>
      <button
        id={changeButtonColor()}
        onClick={() => dispatch(removeTip())}
        className="reset"
        disabled={checkState()}
      >
        RESET
      </button>
    </div>
  );
};
