import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import {Connexion} from '../Components/Connexion';
import {Deconnexion} from '../Components/Deconnexion';
import { Repertoire } from "./Repertoire";
import { Albums } from "./Albums";

export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {connecter: false};
   
    this.gererConnexion = this.gererConnexion.bind(this);
    this.verifierConnexion = this.verifierConnexion.bind(this);
    
  }




  /* Connexion */

  verifierConnexion(connexion){
    this.setState({ connecter: connexion });
  }
  /* fin Connexion */

  
  

  gererConnexion(){
    if(this.state.connecter){
      return (
        <Container fluid>
          <Row>
          <Col></Col>
          <Col></Col>
            <Col className="mt-5">
              <Deconnexion onClick={this.verifierConnexion} />
            </Col>
          </Row>
          <Repertoire />
          <Albums/>
        </Container>  
      )
    }



    else{
      return(
        <Connexion onClick={this.verifierConnexion}/>
      )
    }
  }



  render() {
    return (
        this.gererConnexion()
    );
  }
}