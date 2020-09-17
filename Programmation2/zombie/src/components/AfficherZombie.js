import React , {useState , useEffect} from "react";
import { Image,Container,Row,Col } from "react-bootstrap";
import {API} from "../constantes";
import { Header } from "./Header";
import { Link } from "react-router-dom";


function AfficherZombie(props){
  const [donneesRecues , setDonneesRecues] = useState({name: '', picture:"", special:"" });
  const [zombieID] = useState(props.location.search.substring(4,props.location.search.length));

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
        <Container fluid className="box3">
            <Header/>
                <Row className="mt-5">
                    <Col lg="3"></Col>
                    <Col xl="2" md="12" sm="12" className="text-center">
                        <h1 className="mt-5">{donneesRecues.name}</h1> 
                    </Col>
                    <Col lg="4" md="12" className="mt-3 mb-5 mx-lg-5 mr-md-5 center">
                        <Image src={donneesRecues.picture} className="img-fiche"/>
                        <h1 className="my-4">Description</h1>  
                        <p className="mb-5">{donneesRecues.special}</p>
                        <Link to="/Liste" className="btn btn-orange my-5">
                          Back to zombies list
                        </Link>
                    </Col>    
                </Row>
        </Container>
      </>
    );
  }

  export default AfficherZombie;