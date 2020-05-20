import React from 'react';
import Card from 'react-bootstrap/Card'; 
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup'; 
import logo from '../../img/22.jpg'; 
import Col from 'react-bootstrap/Col';

const image = (  
  <img 
  src= {logo}  
  alt="Bjorn" 
  className = "img-fluid"/>  
); 

export class Profils extends React.Component{
  render() {
    return (
    <Col xs lg="2">
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Title><br />Erik Paquet<br /> Integrateur Web<br /></Card.Title>
              <ListGroup className="list-group-flush">
              <ListGroupItem>Courriel : erikweb@gmail.com</ListGroupItem>
              <ListGroupItem>Telephone : (919)666-6666</ListGroupItem>
              <ListGroupItem>Adresse : 666 Maple street</ListGroupItem>
            </ListGroup>
          </Card>
     </Col>
      )
  }
}