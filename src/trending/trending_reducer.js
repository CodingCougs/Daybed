 import * as trendingActions from './trending_actions';

//API KEY: TSjxmpHe02p25IoPScYicwNQSSqex6gf

export default function (state = {

}, action ){
    
    let stateCopy = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case trendingActions.GET_GIFS:
            debugger;
        return {...stateCopy}

        default:
            return {...stateCopy}       
    }

    return {...stateCopy}

}