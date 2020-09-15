import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {API} from "../constantes";
import {toast} from "react-toastify";

function FormEditerZombie(props){
  const [donneesRecues , setDonneesRecues] = useState({name: '', picture:"", special:"" });
  const [zombieID , setZombieID] = useState(props.location.search.substring(4,props.location.search.length));
  const [photos , setPhotos] = useState("");
  //Ajout de la gestion des erreurs
  useEffect(() => {
    getZombieInfos();
  },[]);

  
  async function getZombieInfos() {
    try {
      
      const response = await fetch(API + "/" + zombieID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      console.log(reponseDeApi);
     
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editZombie(nom,photo,attaque1) { 
    try{ 
      const response = await fetch(API + "/" + zombieID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          name: nom,
          picture: photo,
          special: attaque1
        }) 
      }); 
      if(response.ok){ 
        props.history.push("/");
        toast.success("Modification du Zombie " + nom);

        return response; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

async function removeZombie() { 
    try{ 
    const response = await fetch(API + "/" + zombieID, { 
      method:'delete', 
    }); 
    if(response.ok){ 
      
      props.history.push("/");
      toast.error("Supression du zombie ");

      return response; 
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
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" defaultValue={donneesRecues.name}/>
              </Form.Group>
              <Form.Group controlId="photoZombie">
                <Form.Label>URL d'une photo</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto} defaultValue={donneesRecues.picture}/>
              </Form.Group>
              {donneesRecues.picture !== "" && <Image src={donneesRecues.picture} className="img-form"/>}
              <Form.Group controlId="attaque1">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Entrer la description" defaultValue={donneesRecues.special}/>
              </Form.Group>

            <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
          <p className="btn btn-danger mt-5" onClick={removeZombie}>Supprimer le zombie</p>
        </Container>
      </>
    );
  }

  export default FormEditerZombie;