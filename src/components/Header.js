import React, { Component } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideocallIcon from '@material-ui/icons/VideoCall';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Button} from 'react-bootstrap' ;
import {Form} from 'react-bootstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'react-slideshow-image/dist/styles.css';

class Header extends Component {

    handleLogout() {
        this.props.logoutUser();
    }

    /* render(){
    
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
            </div>
            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header__inputButton"/> 
            </div>
            <div className="header__icons">
                <VideocallIcon className="header__icon" />
                <NotificationIcon className="header__icon" />
                <Avatar
                    alt="Ennaouri"
                    src="../assets/images/photo.jpg"
                    />
                    <LocalForm onSubmit={() => this.handleLogout()}>
                    <Button type="submit" color="primary" className="ml-2" >
                                Logout
                            </Button>
                            </LocalForm>
            </div>
            
        </div>
    )
} */
constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
  }

  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
    event.preventDefault();

  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (

      <div>
        <Navbar  expand="md" >
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} ><MenuIcon /></NavbarToggler>
            
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar >
                <ul className="navbar-nav mr-auto">
                  <li className="active\"><NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> List Vehicules</NavLink></li>
                  <li><NavLink className="nav-link" to='/AjouterInfraction' ><span className="fa fa-list fa-lg"></span> Ajouter Infraction</NavLink></li>
                  {this.props.role === 'ADMIN' ?
                  <li><NavLink className="nav-link" to='/Facturation' ><span className="fa fa-list fa-lg"></span> Facturation</NavLink></li>
                : <li></li>
                }
                  
                  
                </ul>
              </Nav>

            </Collapse>
            <div className="header__icons">
                
                {this.props.role === 'ADMIN' ? <Avatar
                    alt="Ennaouri"
                    src="../assets/images/photo.jpg"
                    />
                : <div></div>
                }
                    <LocalForm onSubmit={() => this.handleLogout()}>
                    <Button type="submit" color="primary" className="ml-2" >
                                Logout
                            </Button>
                            </LocalForm>
            </div>
          </div>
        </Navbar>

        

      </div>

    );
  }
}

export default Header
