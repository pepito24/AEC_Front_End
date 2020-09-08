import React from "react";
import { Link } from "react-router-dom";
import {Card,Image} from "react-bootstrap"

export class Objets extends React.Component {
  
  render() {
    return (
      <>
      <Card>
        <Card.Body>
          <Image src={this.props.urlPhoto} rounded width="125"/>
          <Link to={"Objets/" + this.props.nom + "?id=" + this.props.id}>
            <h1>{this.props.nom}</h1>
          </Link>
        </Card.Body>
      </Card>     
      </>
    );
  }
}