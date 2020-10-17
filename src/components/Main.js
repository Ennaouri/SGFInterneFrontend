import React, { Component } from 'react';
import Header from './Header';
import ListeVehicules from './ListeVehicules';
import Login from './Login' ;
import UpdateInfraction from './UpdateInfraction' ;
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import AjouterInfraction from './AjouterInfraction';
import ContactUs from './ContactUs' ;
import { fetchInfractions, fetchPenalites,fetchInfractionByNumeroVehicule , fetchVehicules, deleteInfraction, loginUser, logoutUser, postFacture, postInfraction,fetchDepannages, fetchPoliciers, postFeedback, updateInfraction } from '../redux/ActionCreators';
import InfoInfractions from './InfoInfractions';
import AdjustStatus from "./AdjustStatus";
import jwt_decode from "jwt-decode";
import DeleteInfraction from './DeleteInfraction';
import Facturation from './Facturation';
import MediaInfraction from './MediaInfraction';


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
    postFacture: (infractionId, montantTotal , valideCarteGrise, validePermis, valideAssurance, valideVignette, valideVisite, validePaiement,nom,prenom,cin ) => dispatch(postFacture(infractionId, montantTotal , valideCarteGrise, validePermis, valideAssurance, valideVignette, valideVisite, validePaiement,nom,prenom,cin ) ),
  postInfraction: (policierId,depannageId,numeroMatricule, marqueVehicule , typeVehicule, typeInfraction,fd) => dispatch(postInfraction(policierId,depannageId,numeroMatricule, marqueVehicule , typeVehicule, typeInfraction,fd)),
    fetchPenalites: () => dispatch(fetchPenalites()),
  fetchDepannages : () => dispatch(fetchDepannages()),
  fetchInfractions: () => dispatch(fetchInfractions()),
  fetchVehicules: () => dispatch(fetchVehicules()),
  fetchPoliciers: () => dispatch(fetchPoliciers()),
  postFeedback: (firstname,lastname,telnum,email,agree,contactType,message) => dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message) ),
  deleteInfraction: id => dispatch(deleteInfraction(id)),
//  fetchPlaces: () => dispatch(fetchPlaces()),
fetchInfractionByNumeroVehicule : () => dispatch(fetchInfractionByNumeroVehicule()),
updateInfraction: (idInfraction,numeroMatricule, marqueVehicule , typeVehicule, typeInfraction) => dispatch(updateInfraction(idInfraction,numeroMatricule, marqueVehicule , typeVehicule, typeInfraction))
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
    <InfoInfractions
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

const getInfraction =({match}) => {
  return(
    <DeleteInfraction 
    delete={this.props.deleteInfraction()}
    />
  )
};

const updateInfractionLink = ({match}) => {
  
  return(
    <UpdateInfraction 
    infractions = {this.props.infractions.infractions}
   updateInfraction = {this.props.updateInfraction}
    parametre={match.params.infractionId}
    />
  )
};

const findInfraction = ({match}) => {
  return(
    <MediaInfraction 
    infractions = {this.props.infractions.infractions}
    
    parametre={match.params.infractionId}
    />
  );
} 

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
if(this.props.auth.isAuthenticated === true){
  var decoded = jwt_decode(token);
 
  console.log("decode : "+decoded.roles[0].authority);
}

        return (
            <div>
              {!this.props.auth.isAuthenticated ?
                <div></div>
          :
          <div>
           <Header logoutUser={this.props.logoutUser}
            auth={this.props.auth} 
            role={decoded.roles[0].authority}
           />
           
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
          <PrivateRoute path='/delete/:infractionId' component={getInfraction} />
          <PrivateRoute path='/home' component={() => <ListeVehicules infractions={this.props.infractions.infractions}
                           delete={this.props.deleteInfraction}
                           role={decoded.roles[0].authority}
                           />} />
          <PrivateRoute exact path='/contactus' component={() => <ContactUs resetFeedbackForm={this.props.resetFeedbackForm}
              postFeedback={this.props.postFeedback}  />} />
              <PrivateRoute exact path = '/facturation' component={() => <Facturation infractions={this.props.infractions.infractions}/>} />
              <PrivateRoute path = '/facturation/:infractionId' component={() => <MediaInfraction parametre= {findInfraction}/>} />
              <PrivateRoute path = '/UpdateInfractions/:infractionId' component={updateInfractionLink} />
          <Redirect to="/home" />
        </Switch>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));