import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/styb bts.JPG";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to
                <br />
                <strong className="main-name">  DintzMX Lighting</strong>! 
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
              My name is
                <br />
                <strong className="main-name"> David Seungwoo Lee 😎</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} 
              className="d-flex align-items-center justify-content-center" 
              style={{ paddingBottom: 20 }}
            >   
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
