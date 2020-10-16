import React, { Component } from 'react'
import {Control, LocalForm, Errors,Field, reduxForm} from 'react-redux-form';
import {Label, Col, Row, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import history from "../components/history";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);




export default class UpdateInfraction extends Component {

    handleSubmit(values){
        console.log("je suis dans submit update" + this.props.parametre);
        this.props.updateInfraction(this.props.parametre, values.numeroMatricule, values.marqueVehicule , values.typeVehicule, values.typeInfraction);
        alert("Operation effectué avec succés");
        history.push('/home');
        window.location.reload();
        
    }
    
    render() {
        
        return (
            <div className="container ajouterInfraction__home">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="numeroMatricule" md={2}>Numero Matricule</Label>
                        <Col md={10}>
                            <Control.text model=".numeroMatricule" id="numeroMatricule" name="numeroMatricule"
                            placeholder="Numero Matricule"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                             />
                        <Errors
                            className="text-danger"
                            model=".numeroMatricule"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                         />
                            
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="marqueVehicule" md={2}>Marque Vehicule</Label>
                        <Col md={10}>
                            <Control.text model=".marqueVehicule" id="marqueVehicule" name="marqueVehicule"
                            placeholder="Marque Vehicule"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                             />
                        <Errors
                            className="text-danger"
                            model=".numeroMatricule"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                    
                        <Col md={{size: 10, offset: 2}}>
                            <Control.select model=".typeInfraction" name="typeInfraction"
                            className="form-control" >
                                <option  hidden>Choisir Type Infraction</option>
                                <option>stationnement</option>
                                <option>vole</option>
                                <option>permisOff</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                    <Col md={{size: 10, offset: 2}}>
                            <Control.select model=".typeVehicule" name="typeVehicule"
                            className="form-control" >
                                <option  hidden>Choisir Type Vehicule</option>
                                <option>leger</option>
                                <option>lourd</option>
                                <option>moto</option>
                            </Control.select>
                        </Col>
                    </Row>
                    
                   
                    
                    <Row className="form-group mt-4">
                    <Col md={{size: 10, offset: 2}}>
                            <Button type="submit" color="primary" >
                                Valider
                            </Button>
                        </Col>
                        
                    </Row>
                    
                </LocalForm>
            </div>
        )
    }
}
