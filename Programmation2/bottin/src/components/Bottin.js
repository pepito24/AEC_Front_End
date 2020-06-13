import React from "react";
import Row from "react-bootstrap/Row";
import { Client } from "../components/Client";


export class Bottin extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Client />
        </Row>
      </>
    );
  }
}