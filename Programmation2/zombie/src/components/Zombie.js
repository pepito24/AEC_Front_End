import React from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

export class Zombie extends React.Component {

  render() {
    
    return (
      <>
      <Col xl="2" md="6" xs="12" className="my-5 text-center">
        <Card className="cards my-5">
          <Card.Img variant="top" src={this.props.urlPhoto} />
          <Card.Body>
              <Card.Title>
                <Link to={"Perso/" + this.props.nom + "?id=" + this.props.id}>
                  <h2>{this.props.nom}</h2>
                </Link>
              </Card.Title>
              <Link to={"Perso/modifier/" + this.props.nom + "?id=" + this.props.id}>
                <h2>🖉</h2>
              </Link>
          </Card.Body>
        </Card>
      </Col>
      </>
    );
  }
}