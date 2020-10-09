import * as ActionTypes from './ActionTypes' ;


export const Infractions = (state = { errMess: null, infractions:[]}, action) => {
    switch(action.type){
        case ActionTypes.ADD_INFRACTION:
            var infraction = action.payload;
        return { ...state, infractions: state.infractions.concat(infraction)};
        case ActionTypes.ADD_INFRACTIONS:
            return {...state, errMess: null, infractions: action.payload};
        default : 
            return state;
    }
}