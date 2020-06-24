import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";

export class Url extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {value2: ''};
    this.handleC = this.handleC.bind(this); 
  }

  handleC(){
    const url1 = document.getElementById('text').value;
    this.setState({ value: url1 });
    getData();
    alert(this.state.value2);
  } 

render() {
    return (
      <Container>
      <Row className="mt-5">
      <Col md="3" lg="4" ></Col>
        <Col md="6" lg="4" className="mt-5">
          <Form>
            <Form.Group controlId="text">
              <Form.Label >Entrer votre URL</Form.Label>
              <Form.Control type="text" placeholder="Enter URL"/>
            </Form.Group>
            <Button variant="danger" onClick={this.handleC}>    
              Shorten
            </Button> 
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
      <Col md="3" lg="4" ></Col>
      <Col md="3" lg="4" >
         Votre Url court est :
         <h2>{this.state.value2}</h2>
      </Col>
      </Row>
  </Container> 
    );
  }
}


const apiKey = "9469098f736044e5bbfa9a96f9567714"; 
const getData = async () => { 
   try{ 
      const response = await fetch('https://api.rebrandly.com/v1/links', { 
         method:'POST', 
         headers: { 'Content-Type': 'application/json','apikey': apiKey  }, 
         body:JSON.stringify({destination: this.state.value })
       }); 
      if(response.ok){ 
         const jsonResponse = await response.json(); 
         this.setState({ value2: jsonResponse.shortURL });
         return jsonResponse.shortURL; 
      } 
      throw new Error('Request failed!'); 
   } 
   catch(error){ 
      console.log(error); 
   } 
} 