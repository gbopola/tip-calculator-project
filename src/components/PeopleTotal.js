import React, { useState } from 'react';
import person from '../images/icon-person.svg';
import { addNum } from '../redux/tip/tipActions';
import { restrictNumbers } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';

export const PeopleTotal = () => {
  // global state
  const bill = useSelector((state) => state.bill);
  const tip = useSelector((state) => state.tip);
  const numPeople = useSelector((state) => state.numPeople);
  const reset = useSelector((state) => state.reset);
  // component state
  const [value, setValue] = useState('');

  useEffect(() => {
    if (reset) {
      setValue('');
    }
  }, [reset]);

  const dispatch = useDispatch();

  // check if bill and select tip are empty then display error
  const checkNumPeople = (id) => {
    if (bill !== '' && numPeople === '') {
      return id;
    } else if (tip !== '' && numPeople === '') {
      return id;
    } else if (tip !== '' && bill !== '' && numPeople === '') {
      return id;
    } else {
      return '';
    }
  };

  const handleChange = (e) => {
    // restrict user from typing in a string
    setValue(restrictNumbers(e));
    dispatch(addNum(e.target.value));
  };
  return (
    <div className="people-total">
      <div className="people-total-zero">
        <h4>Number of people</h4>
        <h4 className={checkNumPeople('cant-be-zero')}>
          {checkNumPeople("Can't be zero")}
        </h4>
      </div>

      <div className="bill-wrapper">
        <img src={person} className="dollar" alt="dollar" />
        <input
          type="text"
          dir="rtl"
          className="Bill"
          placeholder="0"
          value={value}
          onChange={handleChange}
          id={checkNumPeople('num-zero')}
        />
      </div>
    </div>
  );
};
