import React, { useState, useEffect } from "react";
import { Zombie } from "./Zombie";
import { Header } from "./Header";
import {Container, Row, Col, Card} from "react-bootstrap";
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
                <Col lg="4"></Col>
                    {donneesRecues.map((key,i) => (
                        <Zombie nom={key.name} id={key._id} key={key.name + key._id} urlPhoto={key.picture}></Zombie> 
                    ))}
            </Row> 
        </Container> 
      </>
    ); 
}

export default ListeZombie;