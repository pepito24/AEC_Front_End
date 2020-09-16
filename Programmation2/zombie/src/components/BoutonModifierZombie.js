import React from "react";
import { Link } from "react-router-dom";
import {Col} from "react-bootstrap";

export class BoutonModifierZombie extends React.Component {
  

  render() {
    return (
      <> 
        <Col lg="2" className="text-left">
            <Link to={"Perso/modifier/" + this.props.nom + "?id=" + this.props.id}>
            <h2>🖉</h2>
            </Link>
        </Col>
      </>
    );
  }
}