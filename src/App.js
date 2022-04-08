import logo from './images/logo.svg';
import './App.css';
import { TipWrapper } from './components/TipWrapper';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img className="logo" src={logo} alt="logo" />
        <div className="wrapper">
          <TipWrapper />
        </div>
      </div>
    </Provider>
  );
}

export default App;
