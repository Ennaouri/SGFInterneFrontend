import React, {Component} from 'react';
import './listeVehicules.css'
import {  MDBCardHeader, MDBCard, MDBCardBody, MDBTableHead, MDBTableBody,MDBTable  } from 'mdbreact';
import {Link} from 'react-router-dom'


class ListeVehicules extends Component {
    

    

    render() {
    

    const tableRows = this.props.infractions.map(( infraction , index) =>{
        
        return(
 <tr key={index}>
     <td></td>
 <td>{ infraction.vehicule.id}</td>
 <td>{ infraction.vehicule.categorie.libelle}</td>
 <td>{ infraction.type}</td>
 <td>{infraction.dateEntre}</td>
        <td>{infraction.dateSortie != null ? <i className="fa fa-circle text-success" id="tlp1"></i> : <i className="fa fa-circle " id="tlp1"></i>}</td>
        <td>{infraction.place.libelle}</td>
 <td><Link to={'/infractions/' + infraction.id} className="btn btn-success">Plus Infos</Link></td>
 </tr>
         ) ;
       }
 
 );
        return (
            <div className="container listeVehicules__home">

                <MDBCard>
                    <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                        Listes de Vehicules Saisies
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBTable   >
                     <MDBTableHead>
        <tr>
          <th>#</th>
          <th>N Matricule</th>
          <th>Type Vehicule</th>      
          <th>Type Infraction</th>
          <th>Situation</th>
          <th>date Infraction</th>
          <th>Emplacement Parking</th>
          <th>Action</th>
          </tr>
      </MDBTableHead>
      <MDBTableBody>
        
        { tableRows }
         
        
      </MDBTableBody>
      </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default ListeVehicules;