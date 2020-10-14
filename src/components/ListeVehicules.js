import React, {Component} from 'react';
import './listeVehicules.css'
import {  MDBCardHeader, MDBCard, MDBCardBody, MDBTableHead, MDBTableBody,MDBTable, MDBDataTable  } from 'mdbreact';
import {Link} from 'react-router-dom'


class ListeVehicules extends Component {
    

    

    render() {
    
console.log("je suis dans listvehicules");
const rows2=[];
    const tablerows = this.props.infractions.map(( infraction , index) =>{
        var rObj={};
        rows2[index] = {
            NumeroVehicule :  infraction.vehicule.id,
            CategorieVehicule: infraction.vehicule.categorie.libelle,
            TypeInfraction: infraction.type,
            DateInfraction: infraction.dateEntre,
            SituationVehicule: infraction.dateSortie != null ?
             <i className="fa fa-circle text-success" id="tlp1"></i> 
             : <i className="fa fa-circle " id="tlp1"></i>,
            EmplacementParking: infraction.place.libelle,
            Action: <Link to={'/infractions/' + infraction.id} className="btn btn-success">Plus Infos</Link>
          }
        
        return rObj;
            
      

    });
    
        console.log("rows : " + rows2[0]);
       
        
      
       
 
        
     
 
    const data = {
        columns: [
          {
            label: 'Numero Vehicule',
            field: 'NumeroVehicule',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Categorie Vehicule',
            field: 'CategorieVehicule',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Type Infraction',
            field: 'TypeInfraction',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Date Infraction',
            field: 'DateInfraction',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Situation Vehicule',
            field: 'SituationVehicule',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Emplacement Parking',
            field: 'EmplacementParking',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Action',
            field: 'Action',
            sort: 'asc',
            width: 100
          }
        ],
        rows: rows2
  };

        return (
            <div className="container listeVehicules__home">

<MDBCard>
                    <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                        Listes de Vehicules Saisies
                    </MDBCardHeader>
                    <MDBCardBody>
                    <MDBDataTable
      striped
      bordered
      small
      data={data}
      searching={true}
    />
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default ListeVehicules;