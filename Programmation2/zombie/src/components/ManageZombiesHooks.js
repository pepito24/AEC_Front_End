import React, { useState, useEffect } from "react";
import { Zombie } from "./Zombie";
import {Container, Row, Col} from "react-bootstrap";


function ManageZombiesHooks(){
    const [donneesRecues, setDonneesRecues] = useState([]);

  
    useEffect(() => {getZombies();}, donneesRecues);


      async function getZombies() {
        try {
            const response = await fetch("http://localhost:3001/zombie");
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
      <Container fluid>
      <Row className="text-center box1 align-items-center">
        <Col lg="12">
          {donneesRecues.map((key,i) => (
                <Zombie nom={key.name} toutLobjet={key} id={i+1}></Zombie>
              ))}
        </Col>
      </Row>
      </Container> 
    ); 
}

export default ManageZombiesHooks;