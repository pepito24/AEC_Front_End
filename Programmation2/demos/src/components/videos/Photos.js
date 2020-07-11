import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom'


export class Photos extends React.Component {
  


  render() {
    return (
       
        <Container fluid>
        <Row className="text-center box1 align-items-center">
          <Col lg="12">
          <h1 className="text-white">Photos</h1>
          </Col>
        </Row>
        <Row className="align-items-center text-center">
          <Col className="text-center box2 text-white"></Col>
          <Col className="text-center box3 "></Col>
          <Col className="text-center box4 "></Col>
      </Row>
      <Row className="text-center footer align-items-center">
            <Col>
                <Link exact to="/" className="btn btn-light"> 
                    Retour à l'accueil 
                </Link> 
            </Col>
          </Row>
    </Container> 
    );
  }
}