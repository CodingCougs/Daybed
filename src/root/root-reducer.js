import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import exampleReducer from '../example/example-reducers';
import trendingReducer from '../trending/trending_reducer';

export default combineReducers({
    routing,
    exampleReducer,
    trendingReducer
    // You need to add your component Reducers here to inject them into the data store.
});