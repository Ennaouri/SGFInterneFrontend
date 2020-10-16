import React, {Component} from 'react';
import './listeVehicules.css'
import {  MDBCardHeader, MDBCard, MDBCardBody, MDBTableHead, MDBTableBody,MDBTable, MDBDataTable  } from 'mdbreact';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap' ;
import { LocalForm} from 'react-redux-form';
import history from "../components/history";

class ListeVehicules extends Component {
    
handleDelete(id){
  this.props.delete(id);
  alert("Infraction supprimer avec succes");
  history.push('/home');
                window.location.reload();
}
    

    render() {
    
console.log("je suis dans listvehicules");
const rows2=[];
    const tablerows = this.props.infractions.map(( infraction , index) =>{
        var rObj={};
        const d = infraction.dateEntre;
        let ms = Date.parse(d);
        console.log("date en millisecond " + ms);
        var dd = new Date(ms);

        
        console.log("date formet : " + dd.toLocaleString());
        rows2[index] = {
            NumeroVehicule :  infraction.vehicule.id,
            CategorieVehicule: infraction.vehicule.categorie.libelle,
            TypeInfraction: infraction.type,
            DateInfraction: dd.toLocaleString(),
            SituationVehicule: infraction.dateSortie != null ?
             <i className="fa fa-circle text-success" id="tlp1"></i> 
             : <i className="fa fa-circle " id="tlp1"></i>,
            EmplacementParking: infraction.place.libelle,
            Action: <div>
              {this.props.role ==='ADMIN'?
              <Link to={'/infractions/' + infraction.id} ><span className="fa fa-list fa-lg ml-2"></span></Link>
              : <div></div>
            }
                    <Link to={"/UpdateInfractions/" + infraction.id}  ><i className="fa fa-pencil fa-fw ml-2"></i></Link>
                    <Link to={'/delete/' + infraction.id}  onClick={() => this.handleDelete(infraction.id)} ><i className="fa fa-trash-o fa-fw ml-2" ></i> </Link>
                   
                    
                            
                    </div>
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
            <div className="container listeVehicules__home mt-5">

<MDBCard>
                    <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                        Listes de Vehicules Saisies
                    </MDBCardHeader>
                    <MDBCardBody>
                    <div className="d-flex justify-content-center buttons-wrapper">
    
    <Link  to='/AjouterInfraction' className="btn btn-success">Ajouter une Infraction</Link>
  </div>
                    <MDBDataTable
                    responsive
                    
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