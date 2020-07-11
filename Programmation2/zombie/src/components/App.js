import React from "react";
import { ManageZombies } from "./ManageZombies";
import { AjouterZombie } from "./AjouterZombie";
import { PageNotFound } from "./PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import { BoutonAjouterZombie } from "./BoutonAjouterZombie";
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
    <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={ManageZombies} />
        <Route path="/ajouterZombie" component={AjouterZombie} />
        <Route component={PageNotFound} />
      </Switch>
  {location.pathname != "/ajouterZombie" && <BoutonAjouterZombie/> }
    </>
  );
}

export default App;