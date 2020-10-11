import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ListeVehicules from './ListeVehicules';
import Login from './Login' ;
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import AjouterInfraction from './AjouterInfraction';
import { fetchInfractions, fetchPenalites, fetchVehicules, postFacture, postInfraction,fetchDepannages, fetchPoliciers } from '../redux/ActionCreators';
import InfoInfractions from './InfoInfractions';
import AdjustStatus from "./AdjustStatus";



const mapStateToProps = state => {
  
  return {  
    infractions : state.infractions,
    vehicules : state.vehicules,
    penalites : state.penalites,
    places : state.places,
    depannages : state.depannages,
    policiers : state.policiers
  }
}

const mapDispatchToProps = dispatch =>({
    postFacture: (infractionId, montantTotal , valideCarteGrise, validePermis, valideAssurance, valideVignette, valideVisite, validePaiement ) => dispatch(postFacture(infractionId, montantTotal , valideCarteGrise, validePermis, valideAssurance, valideVignette, valideVisite, validePaiement ) ),
  postInfraction: (policierId,depannageId,numeroMatricule, marqueVehicule , typeVehicule, typeInfraction) => dispatch(postInfraction(policierId,depannageId,numeroMatricule, marqueVehicule , typeVehicule, typeInfraction)),
    fetchPenalites: () => dispatch(fetchPenalites()),
  fetchDepannages : () => dispatch(fetchDepannages()),
  fetchInfractions: () => dispatch(fetchInfractions()),
  fetchVehicules: () => dispatch(fetchVehicules()),
  fetchPoliciers: () => dispatch(fetchPoliciers()),
//  fetchPlaces: () => dispatch(fetchPlaces()),
  
});


class Main extends Component {

  
  componentDidMount() {
    this.props.fetchPenalites();
    this.props.fetchInfractions();
    this.props.fetchVehicules();
    this.props.fetchDepannages();
    this.props.fetchPoliciers();
   // this.props.fetchPlaces();

  }
    render() {
      

const info = ({match}) => {
  return(
    <InfoInfractions infractionTest={
      this.props.infractions.infractions.filter((infraction) => infraction.id === parseInt(match.params.infractionId,10))}
    infractions={this.props.infractions.infractions}
    parametre={match.params.infractionId}
    penalites={this.props.penalites.penalites}
    
  />
  );
};

const ajouterFacture = ({match}) => {
    return(
        <AdjustStatus
            infractions={this.props.infractions.infractions}
            infractionId={match.params.infractionId}
            penalites={this.props.penalites.penalites}
            postFacture={this.props.postFacture}
        />
    );
};

const montant = this.props.penalites.penalites.map(penalite => penalite.montant);


        return (
            <div>
              {montant}
                <Header />
        <Switch>
          <Route path="/home" >
          <div className = "header__page">
          <Sidebar />
          <ListeVehicules   infractions={this.props.infractions.infractions}/>
        </div>
            
          </Route>
          <Route path="/ajouterInfraction" component={() => <AjouterInfraction
               depannages={this.props.depannages.depannages}
               policiers={this.props.policiers.policiers}
               postInfraction={this.props.postInfraction}
               />}/>
          <Route path='/infractions/:infractionId' component={info} />
          <Route path='/ajouterFacture/:infractionId' component={ajouterFacture} />
          <Route path='/login' component={() => <Login /> }/>
          
          <Redirect to="/home" />
        </Switch>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));