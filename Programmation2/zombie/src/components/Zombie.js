import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, Container, Row, Col } from "react-bootstrap";

export class Zombie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.toutLobjet);
    return (
      <>
      <Col lg="4">
          <Link to={"Perso/" + this.props.nom + "?id=" + this.props.id}>
            <h1>{this.props.nom}</h1>
            <image src={this.props.urlPhoto} rounded width="125"/>
          </Link> 
      </Col>  
      </>
    );
  }
}