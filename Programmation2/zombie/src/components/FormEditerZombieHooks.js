import React, { useState, useEffect } from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"

function FormEditerZombieHooks () {
  const [donneesRecues, setDonneesRecues] = useState({name: '', picture:"", special:"" });
  const [ZombieID , setZombieID] = useState(2);
  const [photos , setPhotos] = useState("");

  useEffect(() => {addZombie();}, donneesRecues);
  
  async function addZombie() {
    try {
      await this.setState({ZombieID : this.props.location.search.substring(4,this.props.location.search.length)});
      await console.log(this.state.ZombieID);
      const response = await fetch("http://localhost:3001/zombie/"+ this.state.ZombieID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }




  async function editZombie (nom,photo,attaque1) { 
    try{ 
      const response = await fetch('http://localhost:3001/zombie/'+ ZombieID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id : ZombieID,
          name: nom,
          picture: photo,
          special: attaque1
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        props.history.push("/");
        toast.success("Modification du Zombie " + nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}





async function removeZombie() { 
    try{ 
    const response = await fetch('http://localhost:3001/zombie/'+ this.state.ZombieID, { 
      method:'delete', 
    }); 
    if(response.ok){ 
      const jsonResponse = await response.json(); 
      console.log("SUPPRESSION!");
      props.history.push("/");
      toast.error("Supression du Zombie ");

      return jsonResponse; 
    } 
    throw new Error('Request failed!'); 
} 
 catch(error){ 
    console.log(error); 
 } 
}





  function handleEdit(event){
    event.preventDefault();
    
    const nom = document.getElementById('nomZombie').value;
    const photo = document.getElementById('photoZombie').value;
    const attaque1 = document.getElementById('attaque1').value;

    editZombie(nom,photo,attaque1);
  }




  function handlePhoto(event){
    const photos = document.getElementById('photoZombie').value;
    setPhotos(photos);
  }



  
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nomZombie">
                <Form.Label>Nom du Zombie</Form.Label>
                <Form.Control type="text" defaultValue={donneesRecues.name}/> {/*/ Faire le test avec value*/}
              </Form.Group>
              <Form.Group controlId="photoZombie">
                <Form.Label>URL d'une photo du Zombie</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto} defaultValue={donneesRecues.picture}/>
              </Form.Group>
              {donneesRecues.picture !== "" && <Image src={donneesRecues.picture} rounded width="125"/>}
              <Form.Group controlId="attaque1">
                <Form.Label>Nom de l'attaque 1</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 1" defaultValue={donneesRecues.special}/>
              </Form.Group>
            <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
          <p className="btn btn-danger mt-5" onClick={removeZombie}>Supprimer le Zombie</p>
        </Container>
      </>
    );
}

export default FormEditerZombieHooks;