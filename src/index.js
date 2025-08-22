import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { Provider } from 'react-redux';
import { store } from './store/Store';





ReactDOM.render (
<Provider store={store}> 
< App />
</Provider>


, document.getElementById('root'));












