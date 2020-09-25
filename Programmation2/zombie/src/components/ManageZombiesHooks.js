import React from "react";
import { Header } from "./Header";
import {Gallery} from "./Gallery";
import {Container, Row, Col} from "react-bootstrap";
import { BoutonAjouterZombie } from "./BoutonAjouterZombie";

function ManageZombiesHooks(){

    return (
      <> 
        <Container fluid className="box1">
          <Header/>
          <Row className="text-center text-white align-items-center">
            <Col lg="12" className="mb-5">
              <img alt="" className="image" src="https://www.stateofdecay.com/wp-content/themes/state-of-decay-franchise/dist/images/sod_3_logo.png"/>
            </Col>
          </Row> 
        </Container> 
        <Container fluid className="box3">
          <Row className="text-center align-items-center">
            <Col lg="12" className="my-5">
              <h1  className="mt-5">Do you survive in the zombie apocalypse ?</h1>
              <BoutonAjouterZombie/>
            </Col>
          </Row> 
        </Container>
          <Gallery/> 
      </>
    ); 
}

export default ManageZombiesHooks;