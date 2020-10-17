import React, { Component } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import {Button} from 'react-bootstrap' ;
import { LocalForm} from 'react-redux-form';
import { Nav, Navbar, NavbarToggler, Collapse} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';

class Header extends Component {

    handleLogout() {
        this.props.logoutUser();
    }

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
