import React, { Component } from 'react';
import {Control, LocalForm} from 'react-redux-form';
import {Label, Col, Row, Button} from 'reactstrap';
import history from "../components/history";




export default class Facturation extends Component {
    
      
    

    
    handleSubmit = (values) => {
        let infractionSelected = null;
        this.props.infractions.map((infraction,index) => {
            if(infraction.vehicule.numeroMatricule === values.numeroMatricule)
            infractionSelected = infraction
            return infraction
        })
       
        if(infractionSelected != null){
            console.log("numero : " + infractionSelected);
        
            history.push('/infractions/' + infractionSelected.id);
            window.location.reload();
        }else {
            alert("ce vehicule n'exste pas dans la base");
        }
        
    }
    
    render() {
       
        
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

