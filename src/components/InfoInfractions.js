import React from 'react';
import {Link} from 'react-router-dom';



function InfoInfractions(props) {
    
    const tableRows = props.infractions.filter(infraction => infraction.id === parseInt(props.parametre,10)).map(( infraction , index) =>(
        <div>

    <tbody>
        
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
        <Link to={"/ajouterFacture/" + infraction.id} className="btn btn-primary">Regler Situation Vehicule </Link>
  </tbody>
        </div>
       
    ));
    

    const pen = props.penalites.filter(penalite => penalite.infraction.id === parseInt(props.parametre,10) ).map((penalite, index) => (
        <p>{penalite.libelle}</p>
    ));

   
       
       
 
         
       
 
 
 
 return (
    <div className="container">
    <div className="row col-8 " >
           <table className="table" >
  
  {tableRows}
</table>
</div>
        </div>
    )
}

export default InfoInfractions
