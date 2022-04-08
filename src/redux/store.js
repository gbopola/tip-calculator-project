import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tipReducer from './tip/tipReducer';
import thunk from 'redux-thunk';

const store = createStore(
  tipReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
