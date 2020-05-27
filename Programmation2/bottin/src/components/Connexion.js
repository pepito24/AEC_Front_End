import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Container, Row, Col} from "react-bootstrap";

export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.handleConnexion = this.handleConnexion.bind(this);  
  } 
  handleConnexion(){
    let connecter = false;

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email.toLowerCase() === "g.o.t.s@hotmail.com" && pass === "erik2424")
      connecter = true;
    this.props.onClick(connecter);  
  } 

  render() {
    return (
      <Container>
        <Jumbotron>
          <Row className="text-center">
            <Col>
              <h1 >CONNEXION</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                <Button variant="primary" onClick={this.handleConnexion}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Jumbotron>
      </Container> 
    );
  }
}