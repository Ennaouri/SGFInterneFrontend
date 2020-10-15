import {createStore, combineReducers , applyMiddleware} from 'redux';
import {Infractions} from './infractions';
import { Vehicules } from './vehicules';
import {Penalites} from './penalites';
import {Places} from './places';
import { Auth } from './auth';
import {Depannages} from './depannages';
import {Policiers} from './policiers' ;
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import {InitialFacture, InitialInfraction} from "./forms";
import { InitialFeedback } from './forms';

export const configureStore = () => {
    const store =createStore(
        combineReducers({
            infractions : Infractions,
            vehicules : Vehicules,
            penalites : Penalites,
            places : Places,
            depannages : Depannages,
            policiers : Policiers,
            auth : Auth,
            ...createForms({
                facture : InitialFacture,
                infraction : InitialInfraction,
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}