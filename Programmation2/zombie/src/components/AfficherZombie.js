import React , {useState , useEffect} from "react";
import { Button,Image,Container,Row,Col } from "react-bootstrap";
import {API} from "../constantes";
import { Header } from "./Header";
import { BoutonModifierZombie } from "./BoutonModifierZombie";

function AfficherZombie(props){
  const [donneesRecues , setDonneesRecues] = useState({name: '', picture:"", special:"" });
  const [zombieID , setZombieID] = useState(props.location.search.substring(4,props.location.search.length));

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


    return (
      <>
        <Container fluid className=" box3">
            <Header/>
                <Row className="mt-5">
                    <Col lg="3"></Col>
                    <Col lg="2" sm="12" className="text-center">
                        <h1 className="mt-5">{donneesRecues.name}</h1> 
                        <BoutonModifierZombie nom={donneesRecues.name} id={zombieID}/>  
                    </Col>
                    <Col lg="4" sm="12" className="mt-3 mb-5 mx-3 center">
                        <Image src={donneesRecues.picture} className="img-fiche"/>
                        <h1 className="my-4">Description</h1>  
                        <p className="mb-5">{donneesRecues.special}</p>
                    </Col>    
                </Row>
        </Container>
      </>
    );
  }

  export default AfficherZombie;