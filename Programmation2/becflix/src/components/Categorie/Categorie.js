import React from 'react';
import Row from "react-bootstrap/Row";
import {TvShow} from '../TvShow/TvShow';

export class Categorie extends React.Component{
  render() {
    return (
      <>
      <Row>
        <h1>
            {this.props.categorie}
            </h1>
      </Row>
      <Row>
      {this.AfficherCategorie()}
      </Row>
      </>
      )
  }

  AfficherCategorie(){
  return (
    <>
    <TvShow src= {require("../../img/Suspense/lesinvincibles.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <TvShow src= {require("../../img/Suspense/lesinvincibles.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <TvShow src= {require("../../img/Suspense/lesinvincibles.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <TvShow src= {require("../../img/Suspense/lesinvincibles.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <TvShow src= {require("../../img/Suspense/lesinvincibles.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <TvShow src= {require("../../img/Suspense/lesinvincibles.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    </>
   )
 }
}
