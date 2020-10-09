import * as ActionTypes from './ActionTypes' ;


export const Places = (state = { errMess: null, places:[]}, action) => {
    switch(action.type){
        
        case ActionTypes.ADD_PLACES:
            return {...state, errMess: null, places: action.payload};
        default : 
            return state;
    }
}