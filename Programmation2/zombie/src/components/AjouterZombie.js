import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import {API} from "../constantes";
import { Header } from "./Header";


export class AjouterZombie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", setErrors : {}};
    this.handleSave = this.handleSave.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.saveZombie = this.saveZombie.bind(this);
  }

  async saveZombie(nom,photo,attaque1) { 
    try{ 
      const response = await fetch(API, { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          name: nom,
          picture: photo,
          special: attaque1    
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        this.props.history.push("/");
        toast.success("Ajout du Zombie " + nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
} 




  formIsValid(nom,photo,attaque1){
    const _errors = {};
    if(!nom) _errors.nom = "Le nom est obligatoire";
    if(!photo) _errors.photo = "La photo est obligatoire";
    if(!attaque1) _errors.nom = "L'attaque 1 est obligatoire";

    this.setState({setErrors : _errors});
    return Object.keys(_errors).length === 0;
  }




  handleSave(event){
    event.preventDefault();
    
    const nom = document.getElementById('nomZombie').value;
    const photo = document.getElementById('photoZombie').value;
    const attaque1 = document.getElementById('attaque1').value;
    
    if(!this.formIsValid(nom,photo,attaque1)) return;

    this.saveZombie(nom,photo,attaque1);
  }

  handlePhoto(event){
    const photos = document.getElementById('photoZombie').value;
    this.setState( {photo : photos});
  }



  render() {
    return (
      <>
    
     <Container fluid className=" box2">
     <Header/>
        <Row className=" align-items-center mx-3">
          <Col lg="4"></Col>
          <Col lg="4" className=" my-5 ">
              <h1 className="mb-3 text-center text-white">Add Zombies</h1>
              <p className="mb-5 text-center"><strong>Help your community to survival in the zombie apocalypse</strong></p>
              <Form>
                <Form.Group controlId="nomZombie">
                  <Form.Label className="text-white">Name *</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le nom du Zombie" />
                </Form.Group>
                <Form.Group controlId="photoZombie">
                  <Form.Label className="text-white mt-3">Picture (URL) *</Form.Label>
                  <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
                </Form.Group>
                {this.state.photo !== "" && <Image src={this.state.photo} rounded />}
                <Form.Group controlId="attaque1">
                  <Form.Label className="text-white mt-3">Description *</Form.Label>
                  <Form.Control as="textarea" rows="5" placeholder="Entrer la description du zombie" />
                </Form.Group>
                <Button className="mt-3 mb-5" variant="danger" type="submit" onClick={this.handleSave}>
                    Save
                </Button>
              </Form>
            </Col>
        </Row>
      </Container> 
      </>
    );
  }
}