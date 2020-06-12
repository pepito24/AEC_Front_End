import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


export class Lyrics extends React.Component {

  render() {
    return (
    <>
    <Row>
        <Col sm="12" md="6" lg="6"  className="text-left">
        <img src={this.props.src} id ={this.props.id} className="img-fluid" alt=""/>
        </Col>
        <Col sm="12" md="6" lg="6"  className="text-left">
            <h1 className="mt-2">{this.props.titre}</h1>
            <h2 className="mb-5">{this.props.artiste}</h2>  

            <h3 className="mt-5">{this.props.chanson1}</h3> 
                <p className="mt-3 mb-5" onClick={this.props.onClicked2}>{this.props.lyrics}</p>  
                <Button onClick={this.props.retour} variant="secondary">Retour</Button> 
         </Col>
      </Row>
      </>
    );
  }
}