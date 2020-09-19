import React from "react";
import { AjouterZombie } from "./AjouterZombie";
import { PageNotFound } from "./PageNotFound";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../sass/App.sass';
import FormEditerZombie  from "./FormEditerZombie";
import AfficherZombie  from "./AfficherZombie";
import ManageZombiesHooks from "./ManageZombiesHooks";
import  Footer  from "./Footer";
import ListeZombie from "./ListeZombie";

function App() {
  return (
    <>
    <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={ManageZombiesHooks}/>
        <Route path="/ajouterZombie" component={AjouterZombie}/>
        <Route path="/Perso/modifier/:nom" component={FormEditerZombie}/>
        <Route path="/Perso/:nom" component={AfficherZombie}/>
        <Route path="/Liste" component={ListeZombie}/>
        
        <Route component={PageNotFound} />
      </Switch>
  <Footer/>

    </>
  );
}

export default App;