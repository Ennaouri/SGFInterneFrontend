import * as ActionTypes from './ActionTypes' ;
import {baseUrl} from '../shared/baseUrl';
import {fetch} from 'cross-fetch';
import history from "../components/history";





export const addInfractions = (infractions) => ({
    type: ActionTypes.ADD_INFRACTIONS,
    payload: infractions
});

export const fetchInfractions = () => async (dispatch) => {    
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'infractions',{
        headers : {
            'Authorization' : bearer
        }
    })
    
    .then(response => response.json())
    .then(vehicules => dispatch(addInfractions(vehicules)))
    
};

export const addVehicules = (vehicules) => ({
    type: ActionTypes.ADD_VEHICULES,
    payload: vehicules
});

export const fetchVehicules = () => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'vehicules',{
        headers : {
            'Authorization' : bearer
        }
    })
    
    .then(response => response.json())
    .then(vehicules => dispatch(addVehicules(vehicules)))
    
}

export const addPenalites = (penalites) => ({
    type: ActionTypes.ADD_PENALITES,
    payload: penalites
});

export const fetchPenalites = () => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'penalites',{
        headers : {
            'Authorization' : bearer
        }
    })

        .then(response => response.json())
        .then(penalites => dispatch(addPenalites(penalites)))

};

export const addPlaces = (places) => ({
    type: ActionTypes.ADD_PLACES,
    payload: places
});

export const fetchPlaces = () => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'places',{
        headers : {
            'Authorization' : bearer
        }
    })

        .then(response => response.json())
        .then(places => dispatch(addPlaces(places)))

};

export const addFacture = (facture) => ({
    type: ActionTypes.ADD_FACTURE,
    payload: facture
});

export const postFacture = (infractionId, montantTotal , valideCarteGrise, validePermis, valideAssurance, valideVignette, valideVisite,validePaiement,nom,prenom,cin) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const newFacture = {
        infractionId: infractionId,
        montantTotal: montantTotal,
        valideCarteGrise: valideCarteGrise,
        validePermis: validePermis,
        valideAssurance : valideAssurance,
        valideVignette : valideVignette,
        valideVisiteTechnique : valideVisite,
        validePaiement : validePaiement,
        nom : nom,
        prenom : prenom,
        cin : cin
    };
    newFacture.datePaiement = new Date().toISOString();

    return fetch(baseUrl + 'facture', {
        method: "POST",
        body: JSON.stringify(newFacture),
        headers: {
            'Authorization' : bearer,
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
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'depannages',{
        headers : {
            'Authorization' : bearer
        }
    })

        .then(response => response.json())
        .then(depannages => dispatch(addDepannages(depannages)))

};

export const addPoliciers = (policiers) => ({
    type: ActionTypes.ADD_POLICIERS,
    payload: policiers
});

export const fetchPoliciers = () => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'policiers',{
        headers : {
            'Authorization' : bearer
        }
    })

        .then(response => response.json())
        .then(policiers => dispatch(addPoliciers(policiers)))
        .catch(err => dispatch(receiveLogout()))
};

export const getInfractionByNumeroVehicule = (numeroVehicule) => ({
    type : ActionTypes.GET_INFRACTION_By_NUMERO_VEHICULE,
    payload : numeroVehicule
});

export const fetchInfractionByNumeroVehicule = () => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'facturation/',{
        headers : {
            'Authorization' : bearer
        }
    })

        .then(response => response.json())
        .then(response => dispatch(getInfractionByNumeroVehicule))
}

export const addInfraction = (infraction) => ({
    type: ActionTypes.ADD_INFRACTION,
    payload: infraction
});

export const postInfraction = (policierId,depannageId,numeroMatricule, marqueVehicule , typeVehicule, typeInfraction) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');
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
            'Authorization' : bearer,
            "Content-Type": "application/json"
            
        },
        credentials: "same-origin"
    })

        .then(response => response.json())
        .then(response => dispatch(addInfraction(response)))

};

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    fetch(baseUrl + 'login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
        
    
    .then(response => {
        if (response.status) {
            // If login was successful, set the token in local storage
            console.log('response : ' + response.headers.map.authorization);
            console.log('creds : ' + JSON.stringify(creds));
            localStorage.setItem('token', response.headers.map.authorization);
            localStorage.getItem('token')
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
        //    dispatch(fetchFavorites());
            dispatch(receiveLogin(response.headers.map.authorization));
            
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .then((response) => {
        // ...
        history.push('/home');
        window.location.reload();
      })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    console.log("je suis dans logout");
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
   // dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout());
}

export const postFeedback = (firstname,lastname,telnum,email,agree,contactType,message) => dispatch => {

    const newFeedback = {
      firstname: firstname,
      lastname: lastname,
      telnum: telnum,
      email: email,
      agree: agree,
      contactType: contactType,
      message: message
    };
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl + "feedbacks", {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(response =>
        alert("Merci pour votre feedback!")
      )
      .catch(error => {
        console.log("post feedbacks", error.message);
        alert("Your feedback could not be posted\nError: " + error.message);
      });
  };

  export function updateSetSuccess(infraction) {
    return {
      type: ActionTypes.UPDATE_INFRACTION,
      payload : infraction 
    };
  }
  export const updateInfraction = (idInfraction,numeroMatricule, marqueVehicule , typeVehicule, typeInfraction) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const SelectedInfraction = {
        idInfraction: idInfraction,
        numeroMatricule: numeroMatricule,
        marqueVehicule: marqueVehicule,
        typeVehicule : typeVehicule,
        typeInfraction : typeInfraction
    };
    return fetch(baseUrl + 'updateInfraction/' + idInfraction ,{
        method: "PUT",
        body: JSON.stringify(SelectedInfraction),
        headers: {
            'Authorization' : bearer,
            "Content-Type": "application/json"
            
        },
        credentials: "same-origin"
    })

        .then(response => response.json())
        .then(response => dispatch(updateSetSuccess(response)))
        
};

  
  export function deleteSetSuccess(id) {
    return {
      type: ActionTypes.DELETE_INFRACTION,
      id,
    };
  }

export const deleteInfraction = (id) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'delete/' + id ,{
        method: "DELETE",
        headers : {
            'Authorization' : bearer,
            
        }
    })

        .then(response => response.json())
        .then(id => dispatch(deleteSetSuccess(id)))
        
};

