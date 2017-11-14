import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import exampleReducer from '../example/example-reducers';


export default combineReducers({
    routing,
    exampleReducer
    // You need to add your component Reducers here to inject them into the data store.
});