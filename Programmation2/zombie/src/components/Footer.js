import React from "react";
import { Nav, Navbar, NavItem, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BoutonRetourAccueil } from "./BoutonRetourAccueil";
import { useLocation } from 'react-router-dom';

function Footer() {
    let location = useLocation();
    console.log(location.pathname);
    return (
      <Container fluid>
        <Row className="footer align-items-center">
            <Col lg="2"></Col>
            <Col lg="3">
            <h2 className="mt-5 mb-3 text-white">About-us</h2>
            <p className="mb-5"><strong>Since announcing our partnership with the American Red Cross, we’ve been busy behind the scenes creating more ways to bring awareness 
              to the urgent need for blood donations during this pandemic.</strong></p>
            </Col>
            <Col lg="3"></Col>
            <Col lg="2">
            {(location.pathname != "/") && <BoutonRetourAccueil/> }
            </Col>
        </Row>
        <Row className="footer-bottom text-center align-items-center">
            <Col lg="12 text-white">
              ZombieMedia @ 2020 - Erik Paquet
            </Col>
        </Row>
    </Container>
    );
}

export default Footer;