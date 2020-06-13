import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import image from "../img/holly1.jpg";
import image2 from "../img/22.jpg";
import Button from "react-bootstrap/Button";



let image1 = {
  src: image,
  alt: "Les invincibles",
  title: "Les invicibles",
};

let image23 = {
  src: image2,
  alt: "Les invincibles",
  title: "Les invicibles",
};


export class Client extends React.Component {
  constructor(props) {  
    super(props);  
    this.handleChanson = this.handleChanson.bind(this);  
   

  } 


  
  handleChanson(){
    let click = true;
    this.props.onChange(click);  
  } 



      /* Devien la structure de chaque card et les this.prpos devien le scr ou le nom de chaque dans la ligne */
  render() {
    return (
      <>
      <Col xs lg="2">
     <Button onClick={this.handleChanson}> <img
        src={image1.src}
        alt={image1.alt}
        title={image1.title}
        className="img-fluid"
      /></Button>
    </Col>
     <Col xs lg="2">
     <Button onClick={this.handleChanson}> <img
        src={image23.src}
        alt={image23.alt}
        title={image23.title}
        className="img-fluid"
      /></Button>
    </Col>
    </>
    );
  }
}