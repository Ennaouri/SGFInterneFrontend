import React, {Component} from 'react';
import {Row, Col, Button, Label } from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Card} from 'react-bootstrap' ;
import {Link} from 'react-router-dom' ;

const required =(val) =>val&&val.length;
const maxLength = (len)=>(val)=>!(val)||(val.length<=len)
const minLength = (len)=>(val)=>(val)&&(val.length>=len)


class AdjustStatus extends Component{

    constructor(props){
        super(props);
        this.state={
            modalOpen:false
        }
        
    }

    

    handleSubmit(values)
    {
        let montant=0;
        const somme = this.props.penalites.filter(penalite => penalite.infraction.id === parseInt(this.props.infractionId,10) ).map((penalite, index) => {
            montant +=penalite.montant;
            return penalite.montant;
        });
        
        this.props.postFacture(this.props.infractionId,montant,values.agreeGrise,values.agreePermis,values.agreeAssurance,values.agreeVignette,values.agreeVisite,values.valideMontant);

    }
    render(){

        
            let montant=0;
        const somme = this.props.penalites.filter(penalite => penalite.infraction.id === parseInt(this.props.infractionId,10) ).map((penalite, index) => {
            montant +=penalite.montant;
            return penalite.montant;
        });
        
        const tableRows = this.props.infractions.filter(infraction => infraction.id === parseInt(this.props.infractionId,10)).map(( infraction , index) =>(
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
            <td>Numero Matricule du Vehicule : </td>
        <td>{infraction.vehicule.numeroMatricule}</td>
        </tr>
        <tr>
          <td>Type Vehicule : </td>
        <td>{infraction.vehicule.categorie.libelle}</td>
        </tr>

      </tbody>
            </div>
           
        ));

        const pen = this.props.penalites.filter(penalite => penalite.infraction.id === parseInt(this.props.infractionId,10) ).map((penalite, index) => (
            <p>{penalite.libelle}</p>
        ));

        return (
            <div className="container">
                <div className="row" >
                    <table className="table">
                    {tableRows}
                    </table>
                
                </div>
                


                            <LocalForm onSubmit={(value)=>this.handleSubmit(value)}>
                            <Row className="form-group">
                                    <Label htmlFor="nomConducteur" md={2}>Nom Conducteur</Label>
                                    <Col md={6}>
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
                                    <Label htmlFor="prenomConducteur" md={2}>Prenom Conducteur</Label>
                                    <Col md={6}>
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
                                    <Col md={{size: 6, offset: 2}}>
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
                                    <Col md={{size: 6, offset: 2}}>
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
                                    <Col md={{size: 6, offset: 2}}>
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
                                    <Col md={{size: 6, offset: 2}}>
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
                                    <Col md={{size: 6, offset: 2}}>
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
                                <p>Le montant à payer est : {montant}</p>
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 2}}>
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

            </div>
        );
    }
}

export default AdjustStatus
