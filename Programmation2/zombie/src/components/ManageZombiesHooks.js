import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import {Gallery} from "./Gallery";
import {Container, Row, Col} from "react-bootstrap";
import {API} from "../constantes";
import { BoutonModifierZombie } from "./BoutonModifierZombie";


function ManageZombiesHooks(){


    return (
      <>
      <Container fluid className="box1">
        <Header/>
          <Row className="text-center text-white align-items-center">
            <Col lg="12" className="mb-5">
            <img className="image" src="https://www.stateofdecay.com/wp-content/themes/state-of-decay-franchise/dist/images/sod_3_logo.png"/>
            </Col>
          </Row> 
          </Container> 
          <Gallery/> 
      </>
    ); 
}

export default ManageZombiesHooks;