import React, { useState, useEffect } from "react";
import {API} from "../constantes";
import { Objets } from "./Objets";
import {Container, Row, Col} from "react-bootstrap";

function Accueil() {
  const [donneesRecues, setDonneesRecues] = useState([]);

  
  useEffect(() => {
    getSurvie();
  }, [donneesRecues.join(",")]); 

  async function getSurvie() {
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
    <div>
      <h1>Affichage de la liste de tous les Pokemons</h1>
      {donneesRecues.map((key, i) => (
        <Objets nom={key.name} id={key._id} key={key.name + key._id} urlPhoto={key.picture}></Objets>
      ))}
    </div>
  );
}

export default Accueil;