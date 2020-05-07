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
if(this.props.categorie === "Suspense"){
  return (
    <>
    <TvShow src= {require("../../img/Suspense/unite9.jpg")} 
    alt="Unite 9" 
    title="unite 9" 
    /> 
    <TvShow src= {require("../../img/Suspense/19-2.jpg")} 
    alt="19-2" 
    title="19-2" 
    /> 
    <TvShow src= {require("../../img/Suspense/district31.jpg")} 
    alt="District 31" 
    title="District 31" 
    /> 
    <TvShow src= {require("../../img/Suspense/fugueuse.jpg")} 
    alt="fugueuse" 
    title="fugueuse" 
    /> 
    <TvShow src= {require("../../img/Suspense/lesinvincibles.jpg")} 
    alt="Les invincibles" 
    title="Les Invincibles" 
    /> 
    <TvShow src= {require("../../img/Suspense/serienoire.jpg")} 
    alt="Serie noire" 
    title="Serie noire" 
    /> 
    </>
   )
 }

 if(this.props.categorie === "Humour"){
    return (
      <>
      <TvShow src= {require("../../img/Humour/lanceEtCompte.jpg")} 
      alt="Lance et Conpte" 
      title="Lance et Conpte" 
      /> 
      <TvShow src= {require("../../img/Humour/lapetitevie.jpg")} 
      alt="La petite vie" 
      title="La petite vie" 
      /> 
      <TvShow src= {require("../../img/Humour/lesbeauxmalaises.jpg")} 
      alt="Les beaux malaises" 
      title="Les beaux malaises" 
      /> 
      <TvShow src= {require("../../img/Humour/lesbougon.jpg")} 
      alt="Les bougons" 
      title="Les bougons" 
      /> 
      <TvShow src= {require("../../img/Humour/lesboys.jpg")} 
      alt="Les boys" 
      title="Les boys" 
      /> 
      <TvShow src= {require("../../img/Humour/minuitlesoir.jpg")} 
      alt="Minuit le soir" 
      title="Minuit le soir" 
      /> 
      </>
     )
   }

   if(this.props.categorie === "Series americaines"){
    return (
      <>
      <TvShow src= {require("../../img/Series americaines/betterCallSaul.jpg")} 
      alt="Better call saul" 
      title="Better call saul" 
      /> 
      <TvShow src= {require("../../img/Series americaines/breakingbad.jpg")} 
      alt="Breaking Bad" 
      title="Breaking Bad" 
      /> 
      <TvShow src= {require("../../img/Series americaines/dexter.jpg")} 
      alt="Dexter" 
      title="Dexter" 
      /> 
      <TvShow src= {require("../../img/Series americaines/got.jpg")} 
      alt="Got" 
      title="Got" 
      /> 
      <TvShow src= {require("../../img/Series americaines/mandalorian.jpg")} 
      alt="Mandalorian" 
      title="Mandalorian" 
      /> 
      <TvShow src= {require("../../img/Series americaines/vikings.jpg")} 
      alt="Vikings" 
      title="Vikings" 
      /> 
      </>
     )
   }
}

}
Categorie.defaultProps={categorie:'Suspense'};