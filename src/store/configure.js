import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../root/root-reducer';
import rootSaga from '../root/root-saga';

const sagaMiddleware = createSagaMiddleware();


export default function configureStore(history) {
    const storeEnhancers = [];
    const reduxRouterMiddleware = routerMiddleware(history);
    const middleware = [reduxRouterMiddleware, sagaMiddleware];

    if (process.env.NODE_ENV !== 'production'){

        storeEnhancers.push(
            typeof window === 'object' &&
            typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
        );
    }

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware),
            ...storeEnhancers,
        ),
    );

    sagaMiddleware.run(rootSaga)

    return store;

}