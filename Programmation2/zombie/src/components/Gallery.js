import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import { Link } from "react-router-dom";

export class Gallery extends React.Component {
    

  render() {
    return (

        <Container fluid className="box3">
        <Row className="box4"></Row>
        <Row>   
        <Col xs={12} md={12}> </Col>
          <Col xs={6} md={3}>
            <Link to="/Liste">
              <Image href="" className="gallery my-4" src= "https://nightwing.stevivor.com/wp-content/uploads/2018/05/State-of-Decay-2-Logo.jpg" />
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to="/Liste">
              <Image className="gallery my-4" src= "https://sm.ign.com/ign_in/news/s/state-of-d/state-of-decay-2s-juggernauts-can-wipe-out-your-whole-group_tdnq.jpg" />
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to="/Liste">
              <Image className="gallery my-4" src= "https://nightwing.stevivor.com/wp-content/uploads/2018/05/State-of-Decay-2-Logo.jpg"/>
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to="/Liste">
              <Image className="gallery my-4" src= "https://gameranx.com/wp-content/uploads/2016/06/State-Of-Decay-2-720P-Wallpaper-3.jpg"/>
            </Link>
          </Col>
        </Row>
        <Row>
        <Col xs={12} md={12}> </Col>
          <Col xs={12} md={4}>
            <Link to="/Liste">
              <Image className="gallery my-4 " src= "https://i.ytimg.com/vi/3aXo_IJiaPQ/maxresdefault.jpg" />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/Liste">
              <Image className="gallery my-4 " src= "https://nofrag.com/wp-content/uploads/2018/05/SoD.jpg" />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/Liste">
              <Image className="gallery my-4" src= "https://cdn.smartoys.be/catalog/images/thumbs/1280_704/products/5425025606474.JPG"/>
            </Link>
          </Col>
        </Row>
        <Row className="box4"></Row>
    </Container> 
    );
  }
}