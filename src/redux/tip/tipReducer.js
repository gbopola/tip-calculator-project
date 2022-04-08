import { ADD_BILL, ADD_NUM, ADD_TIP, REMOVE_TIP } from './tipType';

const initialState = {
  tip: '',
  bill: '',
  numPeople: '',
  reset: false,
};

const tipReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIP:
      return {
        ...state,
        tip: action.payload,
        reset: false,
      };
    case ADD_BILL:
      return {
        ...state,
        bill: action.payload,
        reset: false,
      };
    case ADD_NUM:
      return {
        ...state,
        numPeople: action.payload,
        reset: false,
      };
    case REMOVE_TIP:
      return {
        ...state,
        tip: '',
        bill: '',
        numPeople: '',
        reset: true,
      };
    default:
      return state;
  }
};

export default tipReducer;
