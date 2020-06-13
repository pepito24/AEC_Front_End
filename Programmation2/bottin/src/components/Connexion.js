import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";

export class Connexion extends React.Component {
  constructor(props) {  
    super(props);  
    this.handleConnexion = this.handleConnexion.bind(this);  
  } 

  
  handleConnexion(){
    let connecter = true;
    this.props.onClick(connecter);  
  } 

  render() {
    return (
      <Container>
          <Row className="text-center">
            <Col >
           
              <h1 className="mb-5">Corsaire Music / Login</h1>
            </Col>
          </Row>
          <Row>
          <Col md="3" lg="4" ></Col>
            <Col md="6" lg="4" >
              <Form>
                <Form.Group controlId="email">
                  <Form.Label >Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>


                
                <Button variant="danger" onClick={this.handleConnexion}>    
                  Submit
                </Button> 


                
              </Form>
            </Col>
          </Row>
      </Container> 
    );
  }
}