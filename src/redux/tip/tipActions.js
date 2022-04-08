export const addTip = (val) => {
  return {
    type: 'ADD_TIP',
    payload: val,
  };
};
export const addBill = (val) => {
  return {
    type: 'ADD_BILL',
    payload: val,
  };
};
export const addNum = (val) => {
  return {
    type: 'ADD_NUM',
    payload: val,
  };
};

export const removeTip = () => {
  return {
    type: 'REMOVE_TIP',
  };
};
