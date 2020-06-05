import React from "react";
import Col from "react-bootstrap/Col";
import Row  from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup"
import './Chanson.css';



export class Chanson extends React.Component {
    constructor(props) {
        super(props);  
      } 

  render() {
    return ( 
        <>
        <Row>
            <Col sm="12" md="5" lg="4"  className="text-left">
                <img src={this.props.src}  alt="" className="img-fluid"/>
            </Col>
            <Col sm="12" md="5" lg="4"  className="text-left">

                <h5 className="mt-5">Album</h5>
                <h1>{this.props.titre}</h1>
                <p className="mb-5">Par {this.props.artiste}</p>
            </Col>
            <Col sm="12" md="1" lg="3"  className="text-left"></Col>
        </Row>
        <Row>
            <Col sm="12" md="9" lg="9"  className="text-left">
                <ListGroup variant="flush">
                    <ListGroup.Item action variant="dark" >{this.props.chanson1}</ListGroup.Item>
                    <ListGroup.Item action variant="dark">{this.props.chanson2}</ListGroup.Item>
                    <ListGroup.Item action variant="dark">{this.props.chanson3}</ListGroup.Item>
                    <ListGroup.Item action variant="dark">{this.props.chanson4}</ListGroup.Item>
                    <ListGroup.Item action variant="dark">{this.props.chanson5}</ListGroup.Item>
                    <ListGroup.Item action variant="dark">{this.props.chanson6}</ListGroup.Item>
                    <ListGroup.Item action variant="dark">{this.props.chanson7}</ListGroup.Item>
                    <ListGroup.Item action variant="dark">{this.props.chanson8}</ListGroup.Item> 
                </ListGroup>
            </Col>
        </Row>
        </>
    );
  }
}