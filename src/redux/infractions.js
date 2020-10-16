import * as ActionTypes from './ActionTypes' ;


export const Infractions = (state = { errMess: null, infractions:[]}, action) => {
    switch(action.type){
        case ActionTypes.ADD_INFRACTION:
            var infraction = action.payload;
        return { ...state, infractions: state.infractions.concat(infraction)};
        case ActionTypes.ADD_INFRACTIONS:
            return {...state, errMess: null, infractions: action.payload};
        case ActionTypes.GET_INFRACTION_By_NUMERO_VEHICULE:
            return {...state,errMess: null, Infractions : action.payload};
        case ActionTypes.DELETE_INFRACTION:
            return {...state, errMess: null, infractions: state.infractions.filter(i => i.id !== action.id)};
        case ActionTypes.UPDATE_INFRACTION:
            return {...state, errMess : null, infractions :  action.payload}
        default : 
            return state;
    }
}