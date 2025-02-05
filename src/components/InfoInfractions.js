import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './infoInfractions.css';
import {  MDBCardHeader, MDBCard, MDBCardBody } from 'mdbreact';

function InfoInfractions(props) {
  console.log("pen inf :" + JSON.stringify(props.penalites[0])) ;
  
    const tableRows = props.infractions.filter(infraction => infraction.id === parseInt(props.parametre,10)).map(( infraction , index) =>(
        

    <tbody key={index}>
        
    <tr>
      <td>Numero Infraction : </td>
      <td>{infraction.id}</td>
      </tr>
      <tr>
      <td>Type Infraction :</td>
    <td>{infraction.type}</td>
    </tr>
    <tr>
    <td>Date Infraction : </td>
    <td>{infraction.dateEntre}</td>
    </tr>
    <tr>
        <td>Numero Matricule Policier Selecteur de l'infraction :</td>
    <td>{infraction.policier.id}</td>
    </tr>
    <tr>
      <td>Nom et Prenom Policier : </td>
    <td>{infraction.policier.nom} {infraction.policier.prenom}</td>
    </tr>
    <tr>
      <td>Numero Matricule Transporteur du Vehicule :</td>
    <td>{infraction.depannage.id}</td>
    </tr>
    <tr>
      <td>Nom et Prenom Conducteur Depannage : </td>
    <td>{infraction.depannage.nom} {infraction.depannage.prenom}</td>
    </tr>
    <tr>
        <td>Numero Matricule du Vehicule : </td>
    <td>{infraction.vehicule.numeroMatricule}</td>
    </tr>
    <tr>
      <td>Type Vehicule : </td>
    <td>{infraction.vehicule.categorie.libelle}</td>
    </tr>
    <tr>
    <td>Marque Vehicule :</td>
    <td>{infraction.vehicule.marque}</td>
    </tr>
    <tr>
            <td>Emplacement Vehicule dans le parking : </td>
    <td>{infraction.place.libelle}</td>
        </tr>
        <tr>
          <td>
        {infraction.dateSortie != null ? <Button className="btn btn-danger" disabled>Vehicule already out out</Button> : <Link to={"/ajouterFacture/" + infraction.id} className="btn btn-primary centerLink btn-lg btn-block">Regler Situation Vehicule </Link>}
        </td>
        </tr>
  </tbody>
        
       
    ));
    

    

   
       
       
 
         
       
 
 
 
 return (
    <div className="container">
    <div className="row offset-md-2" >
    <MDBCard >
                    <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                        Details sur l'infraction
                    </MDBCardHeader>
                    <MDBCardBody>
                    <table className="table" >
  
  {tableRows}
</table>
                    </MDBCardBody>
                </MDBCard>
          
</div>
        </div>
    )
}

export default InfoInfractions
