import React from "react"; 
import {Nav,Navbar, NavItem} from "react-bootstrap" ;
import {NavLink} from 'react-router-dom' ;
import logo from '../img/logo.png' ;

const logo1= logo


export class Menu extends React.Component { 
constructor(props) { 
super(props); 
} 

  
render() { 
    const activeStyle = { color : "white" }; 
return ( 
    <> 

<Navbar bg="dark" variant="dark"> 
    <Navbar.Brand href="/"><img className="ml-3" id="logo" src={logo} alt="Logo" /></Navbar.Brand> 
    <Nav className="mr-auto my-4"> 
    <NavLink exact to="/" className="ml-5 mr-3 color" activeStyle={activeStyle}>Acceuil</NavLink>
    <NavLink to="/Photos" className="mr-3 color" activeStyle={activeStyle}>Photos</NavLink>
    <NavLink to="/Video" className="mr-3 color" activeStyle={activeStyle}>Video</NavLink>
    <NavLink to="/Carte" className="mr-3 color" activeStyle={activeStyle}>Carte</NavLink>
    <NavLink to="/PersonnageV4" className="mr-3 color" activeStyle={activeStyle}>Personnages</NavLink>
</Nav> 
</Navbar> 

</> 
); 
} 
} 