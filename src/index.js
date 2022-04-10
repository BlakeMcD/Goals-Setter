import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import { v4 as uuidv4 } from 'uuid';

import rootReducer from './reducers/rootReducer';
import { addYear } from './actions/actionCreator';

import { loadState, saveState } from './localStorage';


// STORE - globalized state.
// const persistedState = loadState();
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => {
//   saveState(store.getState())
// });

//DISPATCH - sends action to reducer. kic  ks things off. 
// store.dispatch(addYear(
//   {
//     year: "2022", 
//     categories: [], 
// }));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

