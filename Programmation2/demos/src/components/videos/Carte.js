import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom'  

export class Carte extends React.Component {


  render() {
    return (
        <Container fluid>
        <Row className="text-center box1 align-items-center">
            <Col lg="12">
              <h1 className="text-white">Carte</h1>
            </Col>
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