import React, { Component } from 'react'
import {  MDBCard, MDBCardBody, MDBCol, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';
export default class MediaInfraction extends Component {
    render() {
        console.log("params : " +this.props.parametre)
        
        return (
            
            <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            {this.props.parametre}
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        )
    }
}
