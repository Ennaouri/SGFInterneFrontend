import {createStore, combineReducers , applyMiddleware} from 'redux';
import {Infractions} from './infractions';
import { Vehicules } from './vehicules';
import {Penalites} from './penalites';
import {Places} from './places';
import {Depannages} from './depannages';
import {Policiers} from './policiers' ;
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import {InitialFacture, InitialInfraction} from "./forms";


export const configureStore = () => {
    const store =createStore(
        combineReducers({
            infractions : Infractions,
            vehicules : Vehicules,
            penalites : Penalites,
            places : Places,
            depannages : Depannages,
            policiers : Policiers,
            ...createForms({
                facture : InitialFacture,
                infraction : InitialInfraction
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}