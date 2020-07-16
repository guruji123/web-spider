import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loginReducer from './reducers/loginReducer';

import './index.css';
import App from './App';


const store = createStore(
  loginReducer
);

ReactDOM.render(
        <Provider store={store}> 
          <App />
         
        </Provider>,
    
  document.getElementById('root')
);


