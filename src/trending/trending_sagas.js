import { takeLatest, put } from 'redux-saga/effects';
import tredingActions from './trending_actions';



export function* getGifs(action){
    try{
        let response = yield call(/*define our fetch route*/);
        yield put({ type: "todo", payload: 'success'})
    }catch (e){
        yield put({ type: "todo", payload: 'Failure'})
    }
}

export default function* trendingSaga(){
    // yield takeLatest(, getGifs);
}