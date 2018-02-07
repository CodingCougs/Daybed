
import trendingSaga from '../trending/trending_sagas'
// a single entry point to start all the sagas at one. Usering a generating function

export default function* rootSaga(){
    yield [
        trendingSaga
        // Call to your sagas
    ];
}