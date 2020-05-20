import React from 'react';
import Row from 'react-bootstrap/Row';
import {Profils} from '../Profils/Profils';



export class Categorie extends React.Component{
  render() {
    return (
   <Row>
    <Profils />
    <Profils />
    <Profils />
    <Profils />
    <Profils />
    <Profils />
   </Row> 
      )
  }


  AfficherCategorie() {
    return (
      <>
    <Profils src= {require("../../img/22.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <Profils src= {require("../../img/22.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <Profils src= {require("../../img/22.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <Profils src= {require("../../img/22.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <Profils src= {require("../../img/22.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <Profils src= {require("../../img/22.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    </>
    );
  } 
}

