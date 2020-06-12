import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import './App.css';

export class Chansons extends React.Component {

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

                    
                    <h5 onClick={this.props.clickChanson1}>{this.props.chanson1}</h5>
                    <hr style={hr}/>
                    <h5 onClick={this.props.clickChanson2}>{this.props.chanson2}</h5>
                    <hr style={hr}/>
                    <h5 onClick={this.props.clickChanson3}>{this.props.chanson3}</h5>
                    <hr style={hr}/>
                    <h5 onClick={this.props.clickChanson3}>{this.props.chanson4}</h5>
                    <hr style={hr}/>
                    <h5 onClick={this.props.clickChanson3}>{this.props.chanson5}</h5>
                    <hr style={hr}/>
                    <h5 onClick={this.props.clickChanson3}>{this.props.chanson6}</h5>
                    <hr style={hr}/>
                    <h5 onClick={this.props.clickChanson3}>{this.props.chanson7}</h5>
                    <hr style={hr}/>
                    <h5 onClick={this.props.clickChanson3}>{this.props.chanson8}</h5>
                    <hr style={hr}/>
                    <h5 onClick={this.props.clickChanson3}>{this.props.chanson9}</h5>
                    <hr style={hr}/>
                    <h5 onClick={this.props.clickChanson3}>{this.props.chanson10}</h5>  
                 

                    <Button className="mt-5" onClick={this.props.retourCatalogue} variant="secondary">Retour</Button>
                </Col>
            </Row>
            
        </>
    );
  }
}


const hr = {
    backgroundColor: "white",
  };