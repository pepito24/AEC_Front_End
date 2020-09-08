import React from 'react'; 
import  Accueil  from './Accueil';  
import { Route, Switch, Redirect } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { BoutonAjouter } from "./BoutonAjouter";
import { AjouterObjet } from "./AjouterObjet"; 


 

function App() {
  let location = useLocation();
  return (
    <>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/AjouterObjet" component={AjouterObjet} />
      </Switch>
      {(location.pathname != "/AjouterObjet" && !location.pathname.startsWith("/Pokemons")) && <BoutonAjouter/> }
      <br></br>
    </>
  );
}

export default App;