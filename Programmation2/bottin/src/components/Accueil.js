import React from "react";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import {Chanson} from '../components/Chanson';
import {Client} from '../components/Client';
import {Deconnexion} from '../components/Deconnexion';

export class Accueil extends React.Component {
  constructor(props) {
    super(props);



    this.state ={unClick: false};
    this.gererClick = this.gererClick.bind(this);
    this.verifierClick = this.verifierClick.bind(this);
     
  }

  

  verifierClick(amiClick){
    this.setState({ unClick: amiClick });
  }

  gererClick(){
    if(this.state.unClick){
      return (
        <Container fluid>
          <Row>
            <Col>
              <Deconnexion onChange={this.verifierClick} />
            </Col>
          </Row>
          <Chanson />
        </Container>  
      )
    }


    else{
      return(
        <Client onChange={this.verifierClick} />
      )
    }
  }
  render() {
    return (
        this.gererClick()
    );
  }
}