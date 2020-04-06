import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//Router
import { Router } from 'react-navi';
import routes from './router'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router routes={routes}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
