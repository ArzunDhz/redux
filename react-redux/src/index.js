import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore , combineReducers,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { accountReducer } from './reducers/account';
import { bonusReducer } from './reducers/bonous';
import { Provider } from 'react-redux';

const store = createStore( combineReducers ({
  account: accountReducer,
  bonus: bonusReducer ,
}) , applyMiddleware(logger, thunk))






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <App/>
    </Provider>
   
  </React.StrictMode>
);


reportWebVitals();
