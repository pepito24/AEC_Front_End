import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";



export class Client extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
    return (
      <Col xs lg="2">

        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={this.props.src} className="img-fluid"/>
        <Card.Body>
            <Card.Title>{this.props.nom}</Card.Title>
            <Card.Text>{this.props.job}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{this.props.email}</ListGroupItem>
            <ListGroupItem>{this.props.phone}</ListGroupItem>
        </ListGroup>
        </Card>

      </Col>
    );
  }
}