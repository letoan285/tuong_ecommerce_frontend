import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import {configureStore} from './presentation/redux/store';

const store = configureStore();

const loading = <h2>Loading...</h2>

ReactDOM.render(
  <Provider store={store}>
    <React.Suspense fallback={loading}>
      <App />
    </React.Suspense>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
