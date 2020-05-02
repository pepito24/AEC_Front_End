import React from "react"; 

import logo from "./img/netflix.png"; 

import "./App.css"; 

 
 

import stevekerrImg from "./img/stevekerr.jpg"; 

import billImg from "./img/billwenn.png"; 

import dennisImg from "./img/dennis.jpg"; 

import michaelImg from "./img/michaeljordan.jpg"; 

import scottieImg from "./img/scottie.jpg"; 

 
 

let nombreAleatoire = Math.floor(Math.random() * 5); 

let logoNetflix = <img src={logo} className="App-logo" alt="logo" />; 

let imageJoueur; 

let joueurs = [ 

  "Steve Kerr", 

  "Michael Jordan", 

  "Bill Wennington", 

  "Scottie Pippen", 

  "Dennis Rodman", 

]; 

 

const steve = <img id="vedetteImg" src={stevekerrImg} alt="Steve Kerr" />; 

const bill = <img id="vedetteImg" src={billImg} alt="Bill Wennington" />; 

const dennis = <img id="vedetteImg" src={dennisImg} alt="Dennis Rodman" />; 

const michael = <img id="vedetteImg" src={michaelImg} alt="Michael Jordan" />; 

const scottie = <img id="vedetteImg" src={scottieImg} alt="Scottie Pippen" />; 

 
 

/* Change la src de l'image pour le joueurs choisi aléatoirement */ 

switch (joueurs[nombreAleatoire]) { 

  case "Steve Kerr": 

    imageJoueur = steve; 

    break; 

  case "Bill Wennington": 

    imageJoueur = bill; 

    break; 

  case "Dennis Rodman": 

    imageJoueur = dennis; 

    break; 

  case "Michael Jordan": 

    imageJoueur = michael; 

    break; 

  case "Scottie Pippen": 

    imageJoueur = scottie; 

    break; 

  default: 

    imageJoueur = michael; 

} 
 

/* Crée la liste de joueurs MAP a faire afficher */ 

const listeJoueurs = joueurs.map((element, i) => ( 

  <li key={"element" + i}>{element}</li> 

)); 

 

/* Crée la liste de joueurs && a faire afficher */ 

const listeSecond = ( 

  <ul id="listSeconde"> 

    {imageJoueur != steve && <li>Steve</li>} 

    {imageJoueur != bill && <li>Bill</li>} 

    {imageJoueur != dennis && <li>Dennis</li>} 

    {imageJoueur != michael && <li>Michael</li>} 

    {imageJoueur != scottie && <li>Scottie</li>} 

  </ul> 

); 

 
 

/* Button evennement pour changer de joueur */ 

const buttonChangerJoueur = ( 

  <button id="changerJoueurBtn" type="button" onClick={changerJoueur}> 

    Changer de joueur 

  </button> 

); 

 
 

function App()  

  return ( 

    <div className="App"> 

      <header className="App-header"> 

        <h1>THE LAST DANCE</h1> 

        <p>Une production de</p> 

        {logoNetflix} 

        <p>Mettant en vedette</p> 

        <h2 id="nomVedette">{joueurs[nombreAleatoire]}</h2> 

        {imageJoueur} 

        {buttonChangerJoueur} 

        <h2>Le 5 partants affichés avec MAP()</h2> 

        <ul>{listeJoueurs}</ul> 

        <h2>Le 4 partants affichés avec &&</h2> 

        {listeSecond} 

      </header> 

    </div> 

  ); 

} 

 
 

function changerJoueur() { 

  nombreAleatoire = Math.floor(Math.random() * 5); 

  document.getElementById("listSeconde").style.display = "none"; 

 
 

  /* a changer pour random */ 

  let vedette = document.getElementById("vedetteImg"); 

  let nomVedette = document.getElementById("nomVedette"); 

 
 

  /* Change la src de l'image pour le joueurs choisi aléatoirement */ 

  switch (joueurs[nombreAleatoire]) { 

    case "Steve Kerr": 

      vedette.src = stevekerrImg; 

      nomVedette.innerHTML = "Steve Kerr"; 

      break; 

    case "Bill Wennington": 

      vedette.src = billImg; 

      nomVedette.innerHTML = "Bill Wennington"; 

      break; 

    case "Dennis Rodman": 

      vedette.src = dennisImg; 

      nomVedette.innerHTML = "Dennis Rodman"; 

      break; 

    case "Michael Jordan": 

      vedette.src = michaelImg; 

      nomVedette.innerHTML = "Michael Jordan"; 

      break; 

    case "Scottie Pippen": 

      vedette.src = scottieImg; 

      nomVedette.innerHTML = "Scottie Pippen"; 

      break; 

    default: 

      vedette.src = michaelImg; 

      nomVedette.innerHTML = "Michael Jordan"; 

  } 

} 

 
 

export default App; 