import * as ActionTypes from './ActionTypes' ;


export const Penalites = (state = { errMess: null, penalites:[]}, action) => {
    switch(action.type){
        
        case ActionTypes.ADD_PENALITES:
            return {...state, errMess: null, penalites: action.payload};
        default : 
            return state;
    }
}