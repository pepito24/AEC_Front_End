import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Header } from "./Header";
import { BoutonRetourAccueil } from "./BoutonRetourAccueil";

export class PageNotFound extends React.Component {
  render() {
    return (
      <>
         <Container fluid className="box5">
          <Header/>
          <Row className="text-center align-items-center">
            <Col lg="12" className="my-5">
              <h1  className="my-5">Page 404</h1>
              <BoutonRetourAccueil/>
            </Col>
          </Row> 
        </Container> 
      </>
    );
  }
}