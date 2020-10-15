import * as ActionTypes from './ActionTypes' ;


export const Infractions = (state = { errMess: null, infractions:[]}, action) => {
    switch(action.type){
        case ActionTypes.ADD_INFRACTION:
            var infraction = action.payload;
        return { ...state, infractions: state.infractions.concat(infraction)};
        case ActionTypes.ADD_INFRACTIONS:
            return {...state, errMess: null, infractions: action.payload};
        case ActionTypes.DELETE_INFRACTION:
            return {...state, errMess: null, infractions: state.infractions.filter(i => i.id !== action.id)};
        default : 
            return state;
    }
}