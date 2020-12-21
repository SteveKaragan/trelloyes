import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store.js'; //What if I just import './store.js'


//where is the div that id root is on?
//see store.js, I did this different from solution, can't see how solution works!
ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));
  