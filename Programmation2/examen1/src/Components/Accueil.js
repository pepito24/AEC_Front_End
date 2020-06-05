import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import { Catalogue } from "../Components/Catalogue";
import {Connexion} from '../Components/Connexion';
import {Deconnexion} from '../Components/Deconnexion';

export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {connecter: false};
    this.gererConnexion = this.gererConnexion.bind(this);
    this.verifierConnexion = this.verifierConnexion.bind(this);
  }

  verifierConnexion(connexion){
    this.setState({ connecter: connexion });
  }

  gererConnexion(){
    if(this.state.connecter === true){
      return (
        <Container fluid>
          <Row>
          <Col></Col>
          <Col></Col>
            <Col className="mt-5">
              <Deconnexion onClick={this.verifierConnexion} />
            </Col>
          </Row>
          <Catalogue />
        </Container>  
      )
    }
    else{
      return(
        <Connexion onClick={this.verifierConnexion} />
      )
    }
  }
  render() {
    return (
        this.gererConnexion()
    );
  }
}