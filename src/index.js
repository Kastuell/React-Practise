import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';


// const defaultState = {
//   cash: 0,
// }

// const reducer = (state = defaultState, action) => {
//   switch (action.type){
//     case 'ADD_CASH':
//       return {...state, cash: state.cash + action.payload}
//     case 'GET_CASH':
//       return {...state, cash: state.cash - action.payload}
//     default:
//       return state
//   }
// }


const defaultState = {
  word: '',
}

const reducer = (state = defaultState, action) => {
  switch (action.type){
    case 'CHANGE_WORD':
      return {...state, word: action.payload}
    case 'CHANGE_NAME':
      return {...state, word: action.payload}

    // и дальше в том же духе писать case под каждый из инпутов?
    default:
      return state
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
