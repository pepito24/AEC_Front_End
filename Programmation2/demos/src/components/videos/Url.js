import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "react-bootstrap";

export class Url extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleC = this.handleC.bind(this); 
  }

  handleC(){
    const url1 = document.getElementById('text').value;
    this.setState({ value: url1 });
    alert(this.state.value);
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
         {getData}
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
         headers: {'apikey': apiKey  }, 
         body:JSON.stringify({destination: this.state.value }) // se quon envoi a l<api ladress de la page de entrer dans le imput

       }); 

      if(response.ok){ 
         const jsonResponse = await response.json(); 
         return jsonResponse; 

      } 
      throw new Error('Request failed!'); 

   } 

   catch(error){ 
      console.log(error); 
   } 
} 