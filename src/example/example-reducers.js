import * as Actions from './example-actions';
import data from '../config/data';

export default function (state = {
    data,
    activeAccordion: 0
}, action ){
    
    let stateCopy = {...state}

    switch(action.type){

        case Actions.SET_ACTIVE_ACCORDION: {

            let { value } = action.payload;
        
            stateCopy.activeAccordion = value;

            return {...stateCopy}
        }


        default:
            return {...stateCopy}
            
    }

    return {...stateCopy}
}