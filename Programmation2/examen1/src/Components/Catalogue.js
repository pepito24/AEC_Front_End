import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Repertoire } from "../Components/Repertoire";


export class Catalogue extends React.Component {
  render() {
    return (
      <>
      <Container className="app">
        <Row>
          <Repertoire />
        </Row>
        </Container>
      </>
    );
  }
}