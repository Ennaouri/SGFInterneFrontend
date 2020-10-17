import React, {Component} from 'react';
import {Row, Col, Button, Label } from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import history from "../components/history";
import {  MDBCardHeader, MDBCard, MDBCardBody } from 'mdbreact';
import './adjustStatus.css';

//const required =(val) =>val&&val.length;
const maxLength = (len)=>(val)=>!(val)||(val.length<=len)
const minLength = (len)=>(val)=>(val)&&(val.length>=len)


class AdjustStatus extends Component{

    

    

    handleSubmit(values)
    {
        let montant=0;
        this.props.penalites.filter(penalite => penalite.infraction.id === parseInt(this.props.infractionId,10) ).map((penalite, index) => {
            montant +=penalite.montant;
            return penalite.montant;
        });
        
        
        this.props.postFacture(this.props.infractionId,montant,values.agreeGrise,values.agreePermis,values.agreeAssurance,values.agreeVignette,values.agreeVisite,values.valideMontant,values.nomConducteur,values.prenomConducteur,values.cin);
        alert("Operation effectué avec succés");
        history.push('/home');
        window.location.reload();
    }
    render(){

        
            let montant=0;
            
        this.props.penalites.filter(penalite => penalite.infraction.id === parseInt(this.props.infractionId,10) ).map((penalite, index) => {

            montant +=penalite.montant;
            return penalite.montant;
        });
        
        const tableRows = this.props.infractions.filter(infraction => infraction.id === parseInt(this.props.infractionId,10)).map(( infraction , index) =>(
           
    
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
            <td>Numero Matricule du Vehicule : </td>
        <td>{infraction.vehicule.numeroMatricule}</td>
        </tr>
        <tr>
          <td>Type Vehicule : </td>
        <td>{infraction.vehicule.categorie.libelle}</td>
        </tr>

      </tbody>
            
           
        ));

       

        return (
            <div className="container">
                
                
    <div className="row offset-md-2" >
    <MDBCard className="CardWeight">
                    <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                        Information De base
                    </MDBCardHeader>
                    <MDBCardBody>
                    <table className="table" >
  
  {tableRows}
</table>
                    </MDBCardBody>
                </MDBCard>
          
</div>
<div className="row offset-md-2" >
<MDBCard className="CardWeight">
                    <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                        Formulaire de validation
                    </MDBCardHeader>
                    <MDBCardBody>
                    <LocalForm onSubmit={(value)=>this.handleSubmit(value)}>
                            <Row className="form-group">
                                    <Label htmlFor="nomConducteur" md={4}>Nom Conducteur</Label>
                                    <Col md={8}>
                                        <Control.text model=".nomConducteur" id="nomConducteur" name="nomConducteur"
                                            placeholder="nom"
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                             />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                         />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="prenomConducteur" md={4}>Prenom Conducteur</Label>
                                    <Col md={8}>
                                        <Control.text model=".prenomConducteur" id="prenomConducteur" name="prenomConducteur"
                                            placeholder="Prenom"
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                             />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                         />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="cin" md={4}>CIN</Label>
                                    <Col md={8}>
                                        <Control.text model=".cin" id="cin" name="cin"
                                            placeholder="CIN"
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                             />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                         />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 4}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agreeGrise" name="agreeGrise"
                                                                  className="form-check-input"
                                                /> {' '}
                                                <strong>valider carte grise</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 4}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agreePermis" name="agreePermis"
                                                                  className="form-check-input"
                                                /> {' '}
                                                <strong>valider Permis</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 4}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agreeAssurance" name="agreeAssurance"
                                                                  className="form-check-input"
                                                /> {' '}
                                                <strong>Valider Assurance</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 4}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agreeVignette" name="agreeVignette"
                                                                  className="form-check-input"
                                                /> {' '}
                                                <strong>valider Vignette</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                </Row>
                                
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 4}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agreeVisite" name="agreeVisite"
                                                                  className="form-check-input"
                                                /> {' '}
                                                <strong>Valider Visite technique</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                </Row>
                                <p className="text-danger text-center">Le montant à payer est : {montant}</p>
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 4}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".valideMontant" name="valideMontant"
                                                                  className="form-check-input"
                                                /> {' '}
                                                <strong>Valider Payement</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col >
                                        <Button type="submit" color="primary" >Submit</Button>
                                    </Col>
                                </Row>
                                        
                            </LocalForm>
                    </MDBCardBody>
                </MDBCard>


                            
                </div>
            </div>
        );
    }
}

export default AdjustStatus
