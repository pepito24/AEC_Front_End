import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import {Chanson} from '../components/Chanson';
import {Client} from '../components/Client';
import {Deconnexion} from '../components/Deconnexion';

export class Paroles extends React.Component {
  constructor(props) {
    super(props);



    this.state ={unClick2: false};
    this.gererClick2 = this.gererClick2.bind(this);
    this.verifierClick2 = this.verifierClick2.bind(this);
     
  }

  

  verifierClick2(amiClick2){
    this.setState2({ unClick2: amiClick2 });
  }

  gererClick2(){
    if(this.state.unClick2){
      return (
        <Container fluid>
          <Row>
            <Col>
              <Deconnexion onClick={this.verifierClick2} />
            </Col>
          </Row>
          <Chanson />
        </Container>  
      )
    }


    else{
      return(
        <Client onClick={this.verifierClick2} />
      )
    }
  }
  render() {
    return (
        this.gererClick2()
    );
  }
}