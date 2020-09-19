import React from "react";
import { Header } from "./Header";
import {Gallery} from "./Gallery";
import {Container, Row, Col} from "react-bootstrap";



function ManageZombiesHooks(){

    return (
      <>
      <canvas id="canvas-image-blending">
      <Container fluid className="">
        <Header/>
          <Row className="text-center text-white align-items-center">
            <Col lg="12" className="mb-5">
            <img alt="" className="image" src="https://www.stateofdecay.com/wp-content/themes/state-of-decay-franchise/dist/images/sod_3_logo.png"/>
            </Col>
          </Row> 
          </Container> 
          </canvas>
          <Gallery/> 
      </>
    ); 
}

export default ManageZombiesHooks;