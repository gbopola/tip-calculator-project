import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import { useDispatch, useSelector } from 'react-redux';
import dollar from '../images/icon-dollar.svg';
import { restrictNumbers } from '../utils';
import { addBill } from '../redux/tip/tipActions';
export const Bill = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const reset = useSelector((state) => state.reset);

  useEffect(() => {
    if (reset) {
      setValue('');
    }
  }, [reset]);

  const handleChange = async (e) => {
    setValue(restrictNumbers(e));
    dispatch(addBill(e.target.value));
  };

  return (
    <div>
      <h4>Bill</h4>
      <div className="bill-wrapper">
        <img src={dollar} className="dollar" alt="bill" />
        <input
          type="text"
          dir="rtl"
          className="Bill"
          placeholder="0"
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
};
