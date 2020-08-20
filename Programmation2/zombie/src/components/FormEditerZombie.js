import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"

export class FormEditerZombie extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
    this.state = {
                  donneesRecues: {name: '', picture:"", special:"" }, 
                  setErrors : {}};

    this.handleEdit = this.handleEdit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.editZombie = this.editZombie.bind(this);
    this.removeZombie = this.removeZombie.bind(this);
  }







  //On récupère le zombie pour ensuite remplir le formulaire.
  async componentDidMount() {
    try {
    //On sait que location.search retourne ?id=4, on désire garder uniquement le 4 
      await this.setState({ZombieID : this.props.location.search.substring(4,this.props.location.search.length)});
      await console.log(this.state.ZombieID);

      const response = await fetch("http://localhost:3001/zombie/"+ this.state.ZombieID);
      const reponseDeApi = await response.json();
      this.setState({ donneesRecues: reponseDeApi });
      console.log(this.state.donneesRecues);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }






  async editZombie(nom,photo,attaque1) { 
    try{ 
      const response = await fetch('http://localhost:3001/zombie/'+ this.state.ZombieID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id : this.state.ZombieID,
          name: nom,
          picture: photo,
          special: attaque1
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        this.props.history.push("/");
        toast.success("Modification du Zombie " + nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}







async removeZombie() { 
    try{ 
    const response = await fetch('http://localhost:3001/zombie/'+ this.state.ZombieID, { 
      method:'delete', 
    }); 
    if(response.ok){ 
      const jsonResponse = await response.json(); 
      console.log("SUPPRESSION!");
      this.props.history.push("/");
      toast.error("Supression du Zombie ");

      return jsonResponse; 
    } 
    throw new Error('Request failed!'); 
} 
 catch(error){ 
    console.log(error); 
 } 
}






  handleEdit(event){
    event.preventDefault();
    
    const nom = document.getElementById('nomZombie').value;
    const photo = document.getElementById('photoZombie').value;
    const attaque1 = document.getElementById('attaque1').value;

    this.editZombie(nom,photo,attaque1);
  }







  handlePhoto(event){
    const photos = document.getElementById('photoZombie').value;
    this.setState( {photo : photos});
  }






  render() {
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nomZombie">
                <Form.Label>Nom du Zombie</Form.Label>
                <Form.Control type="text" defaultValue={this.state.donneesRecues.name}/> {/*/ Faire le test avec value*/}
              </Form.Group>
              <Form.Group controlId="photoZombie">
                <Form.Label>URL d'une photo du Zombie</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto} defaultValue={this.state.donneesRecues.picture}/>
              </Form.Group>
              {this.state.donneesRecues.picture !== "" && <Image src={this.state.donneesRecues.picture} rounded width="125"/>}
              <Form.Group controlId="attaque1">
                <Form.Label>Nom de l'attaque 1</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 1" defaultValue={this.state.donneesRecues.special}/>
              </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
          <p className="btn btn-danger mt-5" onClick={this.removeZombie}>Supprimer le Zombie</p>
        </Container>
      </>
    );
  }
}