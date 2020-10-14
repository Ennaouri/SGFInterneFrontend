import React, { Component } from 'react'
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Label, Col, Row} from 'reactstrap';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import './login.css';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
export default class Login extends Component {

    handleLogin(values){
        this.props.loginUser({username: values.username, password: values.password});
        
        
    }

    handleLogout() {
        this.props.logoutUser();
    }
    render() {
        const useStyles = makeStyles((theme) => ({
            root: {
              height: '100vh',
              
            },
            image: {
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            paper: {
              margin: theme.spacing(8, 4),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            avatar: {
                alignItems: 'center',
              margin: theme.spacing(1),
              backgroundColor: theme.palette.secondary.main,
            },
            form: {
              width: '100%', // Fix IE 11 issue.
              marginTop: theme.spacing(1),
            },
            submit: {
              margin: theme.spacing(3, 0, 2),
            },
          }));
          
        return (
            <Grid container component="main" className={() => useStyles.root} className="pt-5" >
                <CssBaseline />
      <Grid item xs={false} sm={4} md={4}   />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div >
          <Avatar className={() => useStyles.avatar} className="typo" >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className="typa" >
            Sign in
          </Typography>
                <LocalForm onSubmit={(values) => this.handleLogin(values)}  className={() => useStyles.form} className="mt-5">
                    <Row className="form-group">
                        <Label htmlFor="username" md={4} className="ml-2">Numero Matricule</Label>
                        <Col md={7}>
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
                        <Label htmlFor="password" md={4} className="ml-2">Marque Vehicule</Label>
                        <Col md={7}>
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
                    { this.props.auth.isAuthenticated ?
                                        <p></p>
                                        :
                                        <div>
                                            <p className="text-danger text-center">{this.props.auth.errMess}</p>
                                        </div>
                                    }
                    <Row className="form-group">
                        <Col md={{size: 10, offset: 1}}>
                        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
             
            >
              Sign In
            </Button>
                        </Col>
                          
                    </Row>
                    
                </LocalForm>
                </div>
      </Grid>
            </Grid>
        )
    }
}
