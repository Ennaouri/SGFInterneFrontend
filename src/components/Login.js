import React, { Component } from 'react'
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Label, Col, Row, Button} from 'reactstrap';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
export default class Login extends Component {

    handleSubmit(values){
       this.props.history.push("/");
        
    }
    render() {
        return (
            <div className="container">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="username" md={2}>Numero Matricule</Label>
                        <Col md={10}>
                            <Control.text model=".username" id="username" name="username"
                            placeholder="Username"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                             />
                        <Errors
                            className="text-danger"
                            model=".username"
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
                        <Label htmlFor="password" md={2}>Marque Vehicule</Label>
                        <Col md={10}>
                            <Control.password model=".password" id="password" name="password"
                            placeholder="password"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                             />
                        <Errors
                            className="text-danger"
                            model=".password"
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
                            <Button type="submit" color="primary">
                                Valider
                            </Button>
                        </Col>  
                    </Row>
                    
                </LocalForm>
            </div>
        )
    }
}
