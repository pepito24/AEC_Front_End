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
      nom: "Bjorn",                   /* {this.props.nom} */
      job: "Chef Vicking",            /* {this.props.job} */
      src: require("../img/22.jpg"),  /* {this.props.src} */
      email: "Bjorn@gmail.com",       /* {this.props.email} */
      phone:"418-987-9876",           /* {this.props.phone} */
    },
    {
      nom: "Ragnar",
      job: "Roi vicking",
      src: require("../img/23.jpg"),
      email: "Ragnar@gmail.com",
      phone:"418-987-4326",
    },
    {
      nom: "Vikserck",
      job: "Jeune vicking",
      src: require("../img/24.jpg"),
      email: "Vikserck@gmail.com",
      phone:"418-345-7643",
    },
    {
      nom: "Lagerta",
      job: "Femme bouclier",
      src: require("../img/25.jpg"),
      email: "Lagerta@gmail.com",
      phone:"418-457-4576",
    },
    {
      nom: "Le devin",
      job: "Devin",
      src: require("../img/26.jpg"),
      email: "Devin@gmail.com",
      phone:"418-987-6789",
    },
    {
      nom: "Monsieur X",
      job: "Ancien chef avec moustache",
      src: require("../img/27.jpg"),
      email: "moustache@gmail.com",
      phone:"418-456-9876",
    },
  ];



export class Ligne extends React.Component {
/* barre de recherche */
    constructor(props) {
        super(props);
        this.state = {rechercher:"",                  /* de base la barre de rechehce a rien decrit dedand */
                      listeClients : liste};
        this.Rechercher = this.Rechercher.bind(this);
        this.Effacer = this.Effacer.bind(this);
      }
      Rechercher(){
        let nom = document.getElementById("inputRechercher").value;  /* nom prend la valeur de ce qui est ecrit dans la barre de recherche */
        this.setState({rechercher:nom});
      }
      Effacer(){
        document.getElementById("inputRechercher").value = "";   /* la barre de recherche revient avec rien dedand */
        this.setState({rechercher:""});
      }
/* barre de recherche fin */


  render() {
    return (
        <Container fluid>
        <Row>

    <Form>
        <InputGroup className="mb-3">
          <FormControl
            id="inputRechercher"
            placeholder="Rechercher"
            aria-label="Rechercher"                                               /* zone de recherche */
            aria-describedby="Rechercher"
            onChange={this.Rechercher}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.Rechercher}>Rechercher</Button>
          </InputGroup.Append>
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.Effacer}>Annuler</Button>
          </InputGroup.Append>
        </InputGroup>
    </Form>

        </Row>
        <Row>{this.AfficherCategorie()}</Row>  


      </Container>
    );
  }
  
  AfficherCategorie() {
    if(this.state.rechercher === ""){  /* si ya rien dans decrit dans la barre sa affiche normalement tout les clients*/
       return this.state.listeClients.map((element, i) => (

        <Client
          src={element.src}  /* = {this.props.src} */
          nom={element.nom}  /* = {this.props.nom} */
          job={element.job}  /* = {this.props.job} */                  /* la boucle va donner les valeur de la liste*/
          email={element.email}  /*  = {this.props.email} */
          phone={element.phone}  /* = {this.props.phone} */ 
        ></Client>
      ));
    }
    else{
        const searchResult = this.state.listeClients.filter(l => l.nom.toLowerCase().includes(this.state.rechercher.toLowerCase()));
        return searchResult.map((element, i) => (
            <Client
            src={element.src}  /* = {this.props.src} */
            nom={element.nom}  /* = {this.props.nom} */               /* longue formule pour afficher seulement ceux dont le nom a la lettre ou terme inscrit dans la zone de recherche */
            job={element.job}  /* = {this.props.job} */
            email={element.email}  /*  = {this.props.email} */
            phone={element.phone}  /* = {this.props.phone} */ 
          ></Client>
        ));
      }
    }
  }