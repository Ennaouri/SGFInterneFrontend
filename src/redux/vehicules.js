import * as ActionTypes from './ActionTypes' ;


export const Vehicules = (state = { errMess: null, vehicules:[]}, action) => {
    switch(action.type){
        
        case ActionTypes.ADD_VEHICULES:
            return {...state, errMess: null, vehicules: action.payload};
        default : 
            return state;
    }
}