import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import appStore from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

/* eslint-disable no-underscore-dangle */
const store = createStore(appStore,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
