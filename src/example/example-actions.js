
export const SET_ACTIVE_ACCORDION = 'SET_ACTIVE_ACCORDION';


export function setActiveAccordion(value){
    return{
        type: SET_ACTIVE_ACCORDION,
        payload: {
            value
        }

    }

}