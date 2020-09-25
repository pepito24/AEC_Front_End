import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Header } from "./Header";
import Granim from 'react-granim'




export class PageNotFound extends React.Component {
  
  render() {
    return (
      <>
      <Granim id="granim"></Granim>
         <Container fluid>
          <Header/>
          <Row className="text-center align-items-center">
            <Col lg="12" className="my-5">
              <h1  className="my-5">Page 404</h1>
            </Col>
          </Row> 
        </Container> 
      </>
    );
  }
}