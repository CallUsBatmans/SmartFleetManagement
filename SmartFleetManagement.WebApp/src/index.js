import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

const history = createBrowserHistory();

const Loader = () => <div>loading...</div>;

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Router history={history}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Router>
  </I18nextProvider>
  , document.getElementById('root')
);

serviceWorker.unregister();
