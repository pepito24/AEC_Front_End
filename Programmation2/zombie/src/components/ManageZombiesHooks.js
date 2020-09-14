import React, { useState, useEffect } from "react";
import { Zombie } from "./Zombie";
import { Header } from "./Header";
import {Gallery} from "./Gallery";
import {Container, Row, Col, Image} from "react-bootstrap";
import {API} from "../constantes";





function ManageZombiesHooks(){
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
      <Container fluid className="box1">
        <Header/>
          <Row className="text-center text-white align-items-center">
            <Col lg="12" className="mb-5">
            <img className="image" src="https://www.stateofdecay.com/wp-content/themes/state-of-decay-franchise/dist/images/sod_3_logo.png"/>
              {donneesRecues.map((key,i) => (
                    <Zombie nom={key.name} id={key._id} key={key.name + key._id} urlPhoto={key.picture}></Zombie>
                  ))}
            </Col>
          </Row> 
          </Container> 
          <Gallery/> 
      </>
    ); 
}

export default ManageZombiesHooks;