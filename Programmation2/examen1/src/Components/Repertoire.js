import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Albums } from "../Components/Albums";
import { Liste } from "../Components/Liste";
import './App.css';



/* tout mes albums  */
const liste = [
    {            
      src: require("../img/holly1.jpg"),  
      titre: "American Tragedy",      
      artiste:"Hollywood Undead", 
      id : "album1",  
      chanson: ['Undead','Undead','Undead','Undead','Undead','Undead','Undead','Undead'] ,     
    },
    {
        src: require("../img/holly2.jpg"),  
        titre: "Swan Songs",      
        artiste:"Hollywood Undead",
        id : "album2",
        chanson: ['Undead','Undead','Undead','Undead','Undead','Undead','Undead','Undead'] , 
    },
    {
        src: require("../img/liking1.jpg"),  
        titre: "Hybrid Theory",      
        artiste:"Linkin Park",
        id : "album3",
        chanson: ['Undead','Undead','Undead','Undead','Undead','Undead','Undead','Undead'] , 
    },
    {
        src: require("../img/link2.jpg"),  
        titre: "Meteora",      
        artiste:"Linkin Park",
        id : "album4",
        chanson: ['Undead','Undead','Undead','Undead','Undead','Undead','Undead','Undead'] , 
    },
    {
        src: require("../img/twd.jpg"),  
        titre: "Trench",      
        artiste:"Twenty One Pilots",
        id : "album5",
        chanson: ['Undead','Undead','Undead','Undead','Undead','Undead','Undead','Undead'] , 
    },
    {
        src: require("../img/white.jpg"),  
        titre: "White Rabbit",      
        artiste:"Egypt Central",
        id : "album6",
        chanson: ['Undead','Undead','Undead','Undead','Undead','Undead','Undead','Undead'] , 
    },
    {
        src: require("../img/monster.jpg"),  
        titre: "Popular Monster",      
        artiste:"Falling In reverse",
        id : "album7",
        chanson: ['Undead','Undead','Undead','Undead','Undead','Undead','Undead','Undead'] , 
    },
    {
        src: require("../img/gravity.jpg"),  
        titre: "Gravity (Deluxe Edition)",      
        artiste:"Bullet For My Valentine",
        id : "album8",
        chanson: ['Undead','Undead','Undead','Undead','Undead','Undead','Undead','Undead'] , 
      
    },
  ];


/* recherche */
export class Repertoire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rechercher:"", listeAlbums : liste};
        this.Rechercher = this.Rechercher.bind(this);
        this.Effacer = this.Effacer.bind(this);    
      }



      Rechercher(){
        let titre = document.getElementById("inputRechercher").value;  
        this.setState({rechercher:titre});
       }

      Effacer(){
        document.getElementById("inputRechercher").value = ""; 
        this.setState({rechercher:""});
      }



      AfficherRepertoire() {
        if(this.state.rechercher === ""){  
           return this.state.listeAlbums.map((element, i) => (
    
            <Albums
                src={element.src} 
                titre={element.titre}  
                artiste={element.artiste} 
                id={element.id}          
            ></Albums>
          ));
        }

        else{
            const searchResult = this.state.listeAlbums.filter(l => l.titre.toLowerCase().includes(this.state.rechercher.toLowerCase()));
    
            return searchResult.map((element, i) => (
                <Albums
                  src={element.src}  
                  titre={element.titre}  
                  artiste={element.artiste}
                  id={element.id}  
              ></Albums>
            ));
          }
        }



  render() {
    return (
        <Container>
            <Row className="mb-5">
                <Form className="mb-5 mt-5">
                    <InputGroup className="mb-3">
                    <FormControl
                        id="inputRechercher"
                        placeholder="🔍"
                        aria-label="Rechercher"                                             
                        aria-describedby="Rechercher"
                        onChange={this.Rechercher}
                    />
                    <InputGroup.Append>
                        <Button variant="secondary" onClick={this.Rechercher}>Rechercher</Button>
                    </InputGroup.Append>
                    <InputGroup.Append>
                        <Button variant="danger" onClick={this.Effacer}>Annuler</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Row>
            <Row>
                <Col md={2} xs ={12}>
                    <h1 className="mb-3">Albums</h1>
                </Col>
            </Row>
            <Row className="mb-5">
                    {this.AfficherRepertoire()}
            </Row>
      </Container>
    );
  }
}