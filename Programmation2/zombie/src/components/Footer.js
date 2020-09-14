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
        <Row className="footer text-center align-items-center">
            <Col lg="12">
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