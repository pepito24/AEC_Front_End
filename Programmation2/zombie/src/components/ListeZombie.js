import React, { useState, useEffect } from "react";
import { Zombie } from "./Zombie";
import { Header } from "./Header";
import {Container, Row, Col, Button} from "react-bootstrap";
import {API} from "../constantes";



function ListeZombie(){
    const [donneesRecues, setDonneesRecues] = useState([]);

  
    useEffect(() => {getZombie();}, [donneesRecues.join(",")]);


      async function getZombie() {
        try {
          const response = await fetch(API);
          const reponseDeApi = await response.json();
          setDonneesRecues(reponseDeApi);
          if (!response.ok) {
            throw Error(response.statusText);
          }
        } catch (error) {
          console.log(error);
        }
      }


    return (
      <>
        <Container fluid className="box5">
          <Header/>
            <Row className="text-center align-items-center">
                    {donneesRecues.map((key,i) => (
                        <Zombie nom={key.name} id={key._id} key={key.name + key._id} urlPhoto={key.picture}></Zombie> 
                    ))}
            </Row> 
        </Container> 
        <Container fluid className="box3">
          <Row className="text-center align-items-center">
            <Col lg="12" className="my-5">
            <h1  className="my-5">Lead your community to survival in the zombie apocalypse</h1>
            </Col>
          </Row> 
        </Container>
        <Container fluid className="box6">
        <Button variant="primary" size="lg" block id="boutonInstall"> Installer l'application </Button> 
          </Container>  
      </>
    ); 
}

export default ListeZombie;