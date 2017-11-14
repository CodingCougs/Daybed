require('es6-promise/auto');

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer as HotReloader } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configure';
import routes from './routes'


require.context('../static/', true, /images/);
import './styles/main.less';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const content = (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
);

const renderRoot = () => ReactDOM.render(
    <HotReloader>{content}</HotReloader>,
    document.getElementById('app-container'),
);
renderRoot();

if(module.hot){
    module.hot.accept('./routes', renderRoot);
}