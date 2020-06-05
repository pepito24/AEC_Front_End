import React from "react";
import Container from "react-bootstrap/Container";
import { Chanson } from "./Chanson";
import './App.css';


const listeChanson1 = [
    {            
      src: require("../img/holly1.jpg"),  
      titre: "American Tragedy",      
      artiste:"Hollywood Undead",  
      chanson1 : "Undead",
      chanson2 : "Sell Your Soul",
      chanson3 : "Everywhere I Go",
      chanson4 : "No Other Place",
      chanson5 : "No. 5",
      chanson6 : "Young",
      chanson7 : "City",
      chanson8 : "Pimpin",       
    },
  ];

export class Liste extends React.Component {
  render() {
    return (
        <Container> 
                {this.AfficherListe()}  
      </Container>
    );
  }
  
  AfficherListe() {
       return listeChanson1.map((element, i) => (

        <Chanson
          src={element.src} 
          titre={element.titre}  
          artiste={element.artiste}   
          chanson1={element.chanson1}
          chanson2={element.chanson2}
          chanson3={element.chanson3}
          chanson4={element.chanson4}
          chanson5={element.chanson5}
          chanson6={element.chanson6}
          chanson7={element.chanson7}
          chanson8={element.chanson8}
        ></Chanson>
      ));
    }
  }