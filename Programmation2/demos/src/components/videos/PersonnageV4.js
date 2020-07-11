import React from "react";
import { Perso } from "./Perso";
import {Container, Row, Col} from "react-bootstrap";

export class PersonnageV4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }

  //Ajout de la gestion des erreurs
  async componentDidMount() {
    let tabTMP = [];
    for (let i = 1; i <= 10; i++) {
      try {
        const response = await fetch("https://swapi.dev/api/people/" + i + "/");
        const reponseDeApi = await response.json();
        tabTMP.push(reponseDeApi);
        this.setState({ donneesRecues: tabTMP });
        if (!response.ok) {
          //Permet d'attraper l'erreur 500 et l'erreur 400
          throw Error(response.statusText);
        }
      } catch (error) {
        //On gère l'erreur
        console.log(error);
      }
    }
  }

  render() {
    return (

    <Container fluid>
      <Row className="text-center box1 align-items-center">
        <Col lg="12">
          <h1 className="text-white">Personnages</h1>
          {this.state.donneesRecues.map((key,i) => (
          <Perso nom={key.name} toutLobjet={key} id={i+1}></Perso>
        ))}
        </Col>
      </Row>
  </Container> 
    );
  }
}