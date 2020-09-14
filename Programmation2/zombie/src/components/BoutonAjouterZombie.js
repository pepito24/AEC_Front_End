import React from "react";
import { Link } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

export class BoutonAjouterZombie extends React.Component {
  

  render() {
    return (
      <> 
    <Container fluid>
      <Row className="text-center box2 align-items-center">
        <Col lg="12">
        <Link to="/ajouterZombie" className="btn btn-primary my-5">
          Ajouter un Zombie
        </Link>
        </Col>
      </Row>
    </Container> 
      </>
    );
  }
}