import * as ActionTypes from './ActionTypes' ;


export const Policiers = (state = { errMess: null, policiers:[]}, action) => {
    switch(action.type){
        
        case ActionTypes.ADD_POLICIERS:
            return {...state, errMess: null, policiers: action.payload};
        default : 
            return state;
    }
}