import React, { Component } from 'react';
import {Control, LocalForm, Errors,Field, reduxForm} from 'react-redux-form';
import {Label, Col, Row, Button} from 'reactstrap';
import {MDBBtn} from 'mdbreact';
import history from "../components/history";
import MediaInfraction from './MediaInfraction';



export default class Facturation extends Component {
    
      
    

    
    handleSubmit = (values) => {
        let infractionSelected = null;
        const infraction = this.props.infractions.map((infraction,index) => {
            if(infraction.vehicule.numeroMatricule === values.numeroMatricule)
            infractionSelected = infraction
        })
       
        
        console.log("numero : " + infractionSelected);
        history.push('/infractions/' + infractionSelected.id);
        window.location.reload();
    }
    
    render() {
        let infractionSelected;
        
        return (
            <div className="container mt-5">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="numeroMatricule" md={2}>Numero Matricule</Label>
                        <Col md={10}>
                <Control.text 
                 model=".numeroMatricule" id="numeroMatricule" name="numeroMatricule"
                 placeholder="Search"
                 className="form-control" 
                
                 />
                <Button type="submit" className="mt-4 btn-sm "  >Search</Button>
                
                </Col>
                </Row>
                </LocalForm>
                

            </div>
        )
    }
}

