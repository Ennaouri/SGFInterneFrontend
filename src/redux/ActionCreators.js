import * as ActionTypes from './ActionTypes' ;
import {baseUrl} from '../shared/baseUrl';
import {fetch} from 'cross-fetch';





export const addInfractions = (infractions) => ({
    type: ActionTypes.ADD_INFRACTIONS,
    payload: infractions
});

export const fetchInfractions = () => async (dispatch) => {    
    const response = await fetch(baseUrl + 'infractions');
    const infractions = await response.json();
    return dispatch(addInfractions(infractions));
    
};

export const addVehicules = (vehicules) => ({
    type: ActionTypes.ADD_VEHICULES,
    payload: vehicules
});

export const fetchVehicules = () => (dispatch) => {

    return fetch(baseUrl + 'vehicules')
    
    .then(response => response.json())
    .then(vehicules => dispatch(addVehicules(vehicules)))
    
}

export const addPenalites = (penalites) => ({
    type: ActionTypes.ADD_PENALITES,
    payload: penalites
});

export const fetchPenalites = () => (dispatch) => {

    return fetch(baseUrl + 'penalites')

        .then(response => response.json())
        .then(penalites => dispatch(addPenalites(penalites)))

};

export const addPlaces = (places) => ({
    type: ActionTypes.ADD_PLACES,
    payload: places
});

export const fetchPlaces = () => (dispatch) => {

    return fetch(baseUrl + 'places')

        .then(response => response.json())
        .then(places => dispatch(addPlaces(places)))

};

export const addFacture = (facture) => ({
    type: ActionTypes.ADD_FACTURE,
    payload: facture
});

export const postFacture = (infractionId, montantTotal , valideCarteGrise, validePermis, valideAssurance, valideVignette, valideVisite,validePaiement ) => (dispatch) => {

    const newFacture = {
        infractionId: infractionId,
        montantTotal: montantTotal,
        valideCarteGrise: valideCarteGrise,
        validePermis: validePermis,
        valideAssurance : valideAssurance,
        valideVignette : valideVignette,
        valideVisiteTechnique : valideVisite,
        validePaiement : validePaiement
    };
    newFacture.datePaiement = new Date().toISOString();

    return fetch(baseUrl + 'facture', {
        method: "POST",
        body: JSON.stringify(newFacture),
        headers: {
            
            "Content-Type": "application/json"
            
        },
        credentials: "same-origin"
    })

        .then(response => response.json())
        .then(response => dispatch(addFacture(response)))

};

export const addDepannages = (depannages) => ({
    type: ActionTypes.ADD_DEPANNAGES,
    payload: depannages
});

export const fetchDepannages = () => (dispatch) => {

    return fetch(baseUrl + 'depannages')

        .then(response => response.json())
        .then(depannages => dispatch(addDepannages(depannages)))

};

export const addPoliciers = (policiers) => ({
    type: ActionTypes.ADD_POLICIERS,
    payload: policiers
});

export const fetchPoliciers = () => (dispatch) => {

    return fetch(baseUrl + 'policiers')

        .then(response => response.json())
        .then(policiers => dispatch(addPoliciers(policiers)))

};

export const addInfraction = (infraction) => ({
    type: ActionTypes.ADD_INFRACTION,
    payload: infraction
});

export const postInfraction = (policierId,depannageId,numeroMatricule, marqueVehicule , typeVehicule, typeInfraction) => (dispatch) => {

    const newInfraction = {
        policierId: policierId,
        depannageId: depannageId,
        numeroMatricule: numeroMatricule,
        marqueVehicule: marqueVehicule,
        typeVehicule : typeVehicule,
        typeInfraction : typeInfraction
    };
    newInfraction.dateEntre = new Date().toISOString();

    return fetch(baseUrl + 'ajouterInfraction', {
        method: "POST",
        body: JSON.stringify(newInfraction),
        headers: {
            
            "Content-Type": "application/json"
            
        },
        credentials: "same-origin"
    })

        .then(response => response.json())
        .then(response => dispatch(addInfraction(response)))

};
