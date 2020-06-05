import React from "react";
import Col from "react-bootstrap/Col";
import Row  from "react-bootstrap/Row";



export class Paroles extends React.Component {
    constructor(props) {
        super(props);  
        this.state = { hovered: false };
      } 

  render() {
    return ( 
        <>
        <Row className="mt-5">
            <Col sm="12" md="7" lg="4"  className="text-left">
                <img src={this.props.src}  alt="" className="img-fluid"/>
            </Col>
            <Col sm="12" md="4" lg="4"  className="text-left">

                <h5 className="mt-5">Album</h5>
                <h1 className="mb-5">{this.props.titre}</h1>
                <h5>CHANSON</h5>
                <h1 className="mb-5">{this.props.chanson}</h1>
            </Col>
            <Col sm="12" md="1" lg="3"  className="text-left"></Col>
        </Row>

        <Row>
            <Col sm="12" md="12" lg="9"  className="text-left">
               <p className="mt-5 mb-5">{this.props.parole}</p>
            </Col>
        </Row>
        </>
    );
  }
}