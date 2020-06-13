import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Client } from "../components/Client";

/* tout mes clients (objet) */
const liste = [
    {
      nom: "American tragedy",                   /* {this.props.nom} */
      job: "Hollywood undead",            /* {this.props.job} */
      src: require("../img/holly1.jpg"),  /* {this.props.src} */
    },
  ];



export class Ligne extends React.Component {
  render() {
    return liste.map((element, i) => (
      <Client 
      src={element.src}  /* = {this.props.src} */
      nom={element.nom}  /* = {this.props.nom} */               /* longue formule pour afficher seulement ceux dont le nom a la lettre ou terme inscrit dans la zone de recherche */
      job={element.job}  /* = {this.props.job} */
    ></Client>
    ));
  }
  
  }