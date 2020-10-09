import * as ActionTypes from './ActionTypes' ;


export const Depannages = (state = { errMess: null, depannages:[]}, action) => {
    switch(action.type){
        
        case ActionTypes.ADD_DEPANNAGES:
            return {...state, errMess: null, depannages: action.payload};
        default : 
            return state;
    }
}