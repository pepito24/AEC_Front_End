import React from "react";
import {Container, Row, Col} from "react-bootstrap";
 


export class Accueil extends React.Component {
  


  render() {
    return (
      <Container fluid>
          <Row className="text-center box1 align-items-center">
            <Col lg="12">
              <h1 className="text-white">Welcome to ZombieLand</h1>
              <h5 className="text-white">Tell me survivors, how do you like your apocalypse?</h5>
            </Col>
          </Row>
          
      </Container> 
    );
  }
}