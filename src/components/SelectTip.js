import React, { useState, useEffect } from 'react';
import { addTip } from '../redux/tip/tipActions';
import { useDispatch, useSelector } from 'react-redux';
import { restrictNumbers } from '../utils';

export const SelectTip = () => {
  // select tip button state
  const percentages = [5, 10, 15, 25, 50, 'Custom'];
  const [currButton, setCurrButton] = useState('');
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  // import reset state
  const reset = useSelector((state) => state.reset);

  useEffect(() => {
    if (reset) {
      setCurrButton('');
      setValue('');
    }
  }, [reset]);

  const handleChange = (e) => {
    setValue(restrictNumbers(e));
    dispatch(addTip(e.target.value));
    setCurrButton('');
  };

  const handleClick = (val, e) => {
    setCurrButton(val);
    let tipValue = e.target.textContent.replace('%', '');
    dispatch(addTip(tipValue));
  };

  return (
    <div className="select-tip">
      <h4>Select Tip %</h4>
      <div className="tip-value-wrapper">
        {percentages.map((val) =>
          val !== 'Custom' ? (
            <div
              id={
                val === 'Custom'
                  ? 'tip-value-custom'
                  : currButton === val && 'clicked-state'
              }
              className="tip-value"
              onClick={(e) => handleClick(val, e)}
            >
              {val}
              {val !== 'Custom' && '%'}
            </div>
          ) : (
            <input
              className="custom-input"
              placeholder="Custom"
              dir="rtl"
              value={value}
              onChange={handleChange}
            />
          )
        )}
      </div>
    </div>
  );
};
