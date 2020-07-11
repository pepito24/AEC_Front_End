import React from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap"
import {Image} from "react-bootstrap"
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"

export class AjouterZombie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", setErrors : {}};
    this.handleSave = this.handleSave.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  async savePokemon(nom,photo,attaque1) { 
    try{ 
      const response = await fetch('http://localhost:3001/zombie/', { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id : nom,
          name: nom,
          picture: photo,
          special: [
            {
              name: attaque1
            },
          ]
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

    this.savePokemon(nom,photo,attaque1);
  }

  handlePhoto(event){
    const photos = document.getElementById('photoZombie').value;
    this.setState( {photo : photos});
  }


  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="nomZombie">
            <Form.Label>Nom du Zombie</Form.Label>
            <Form.Control type="text" placeholder="Entrer le nom du Zombie" />
          </Form.Group>
          <Form.Group controlId="photoZombie">
            <Form.Label>URL d'une photo du Zombie</Form.Label>
            <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
          </Form.Group>
          {this.state.photo !== "" && <Image src={this.state.photo} rounded />}
          <Form.Group controlId="attaque1">
            <Form.Label>Nom de l'attaque 1</Form.Label>
            <Form.Control type="text" placeholder="Entrer le nom de l'attaque 1" />
          </Form.Group>

        <Button variant="primary" type="submit" onClick={this.handleSave}>
            Enregistrer
        </Button>
        </Form>
      </>
    );
  }
}