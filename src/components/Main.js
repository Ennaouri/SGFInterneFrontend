import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ListeVehicules from './ListeVehicules';
import Login from './Login' ;
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import AjouterInfraction from './AjouterInfraction';
import { fetchInfractions, fetchPenalites, fetchVehicules, loginUser, logoutUser, postFacture, postInfraction,fetchDepannages, fetchPoliciers } from '../redux/ActionCreators';
import InfoInfractions from './InfoInfractions';
import AdjustStatus from "./AdjustStatus";
import jwt_decode from "jwt-decode";


const mapStateToProps = state => {
  
  return {  
    infractions : state.infractions,
    vehicules : state.vehicules,
    penalites : state.penalites,
    places : state.places,
    depannages : state.depannages,
    policiers : state.policiers,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch =>({
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
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

//const montant = this.props.penalites.penalites.map(penalite => penalite.montant);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    this.props.auth.isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
);

console.log("authen"  + this.props.auth.isAuthenticated );
var token=localStorage.getItem('token');
console.log("token"  + token );
var decoded = jwt_decode(token);
 
console.log("decode : "+decoded.roles[0].authority);
        return (
            <div>
              {!this.props.auth.isAuthenticated ?
                <div></div>
          :
          <div>
           <Header logoutUser={this.props.logoutUser} />
           
           </div>
              }
                
                
          
                
        <Switch>
        
          
          
        
          <PrivateRoute path="/ajouterInfraction" component={() => <AjouterInfraction
               depannages={this.props.depannages.depannages}
               policiers={this.props.policiers.policiers}
               postInfraction={this.props.postInfraction}
               />}/>
          <PrivateRoute path='/infractions/:infractionId' component={info} />
          <PrivateRoute path='/ajouterFacture/:infractionId' component={ajouterFacture} />
          <Route path='/login' component={() => <Login auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} /> }/>
          
          <PrivateRoute path='/home' component={() => <ListeVehicules infractions={this.props.infractions.infractions} />} />
          <Redirect to="/home" />
        </Switch>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));