import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";



export class Chanson1 extends React.Component {
   

  render() {
    return (
      <Col xs lg="2">

        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={this.props.src} className="img-fluid"/>
        <Card.Body>
            <Card.Title>Hollywood undead</Card.Title>
            <Card.Text>Undead</Card.Text>
            <Card.Text>Undead</Card.Text>
        </Card.Body>
        </Card>
      </Col>
    );
  }
}