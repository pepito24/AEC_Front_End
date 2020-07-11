import React from "react";
import { Zombie } from "./Zombie";
import {Container, Row, Col} from "react-bootstrap";


export class ManageZombies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }

  //Ajout de la gestion des erreurs
  async componentDidMount() {
      try {
        const response = await fetch("http://localhost:3001/zombie");
        const reponseDeApi = await response.json();
        this.setState({ donneesRecues: reponseDeApi });
        if (!response.ok) {
          //Permet d'attraper l'erreur 500 et l'erreur 400
          throw Error(response.statusText);
        }
      } catch (error) {
        //On gère l'erreur
        console.log(error);
      }
    }

  render() {
    return (
      <Container fluid>
      <Row className="text-center box1 align-items-center">
        <Col lg="12">
          <h1 className="text-white">Welcome to ZombieLand</h1>
          {this.state.donneesRecues.map((key,i) => (
                <Zombie nom={key.name} toutLobjet={key} id={i+1}></Zombie>
              ))}
        </Col>
      </Row>
      </Container> 
    );
  }
}