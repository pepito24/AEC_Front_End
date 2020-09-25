import React , {useState , useEffect} from "react";
import { Form, Button, Image,Container,Row,Col } from "react-bootstrap";
import {API} from "../constantes";
import {toast} from "react-toastify";
import { Header } from "./Header";

function FormEditerZombie(props){
  const [donneesRecues , setDonneesRecues] = useState({name: '', picture:"", special:"" });
  const [zombieID] = useState(props.location.search.substring(4,props.location.search.length));
  const [setPhotos] = useState("");
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
        toast.success("Zombie edited :" + nom);

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
      toast.error("Zombie removed");

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
        <Container fluid className=" box2">
            <Header/>
            <Row className=" align-items-center mx-3">
                <Col lg="4"></Col>
                <Col lg="4" className=" my-5 ">
                  <h1 className="mb-3 text-center text-white">Edit Zombies</h1>
                  <p className="mb-5 text-center"><strong>Edit or remove Zombies form your list !</strong></p>
                  <Form>
                    <Form.Group controlId="nomZombie">
                      <Form.Label className="text-white">Name *</Form.Label>
                      <Form.Control type="text" defaultValue={donneesRecues.name}/>
                    </Form.Group>
                    <Form.Group controlId="photoZombie">
                      <Form.Label className="text-white">URL*</Form.Label>
                      <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto} defaultValue={donneesRecues.picture}/>
                    </Form.Group>
                    {donneesRecues.picture !== "" && <Image src={donneesRecues.picture} className="img-form"/>}
                    <Form.Group controlId="attaque1" className="mt-3">
                      <Form.Label className="text-white">Description *</Form.Label>
                      <Form.Control as="textarea" rows="5" placeholder="Entrer la description" defaultValue={donneesRecues.special}/>
                    </Form.Group>
                      <Button variant="orange" type="submit" onClick={handleEdit}>Save</Button>
                      <p className="btn btn-danger ml-md-5 mt-3" onClick={removeZombie}>Remove</p>
                  </Form>  
                </Col>    
            </Row>
          </Container>
      </>
    );
  }

  export default FormEditerZombie;