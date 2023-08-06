import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore   } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './store/store'
import reportWebVitals from './reportWebVitals';
import "./styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  rootReducer
);
root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

reportWebVitals();
