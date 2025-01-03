import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/seance bts.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT <span className="purple"> I </span> DO
            </h1>
            <p className="home-about-body">
              I am a <b className="purple"> Set Electrician, Grip, Dimmer Board Operator, </b>and <b className="purple"> Lighting Console Programmer</b> based in <b className="purple"> Chicago, Illinois</b>.
              <br />
              <br />
              My main console is 
              
                <b className="purple"> Blackout Lighting Console, </b> 
                but I am also versed in <b className="purple">Luminair, Sidus Link Pro, </b>
                and currently in the process of learning<b className="purple"> ETC. </b>
              
              <br />
              <br />
              I provide <b className="purple">hardware and software rentals </b>for <b className="purple">hard-line and wireless DMX (CRMX)</b>, as well as
                some basic{" "} <b className="purple">camera gear packages</b> for <b className="purple">tight space/small rig shots (Sony FX30)</b>.
              <br/>
              <br/>
              I additionally offer on set solutions that require expertise in <b className="purple"> building + managing temporary or permanent lighting network infrastructures, console programming, and board operation</b>.
              
              <br />
              <br />
              Whenever possible, I am tinkering around with industry standard products from brands such as <b className="purple">LumenRadio, RatPac Controls, Astera, Creamsource</b> and <b className="purple">Aputure Lighting,</b> while also staying up to date on
                <b className="purple">
                  {" "}
                  different RF protocols
                </b>
              
              &nbsp;relating to
              
                <b className="purple"> 2.4GHZ CRMX, 2.4/5/6GHZ WiFi, 2.4/5/6GHZ video transmission (Teradek)</b>.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex align-items-center justify-content-center"
          >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxWidth: "80%" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1> <span className="purple">Contact</span> & <span className="purple">Connect</span></h1>
            <p>
              Feel free to <span className="purple">reach out!</span>
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="tel:+17734418287"
                  className="icon-colour home-social-icons"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }} 
                >
                <AiFillPhone/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:dintzmx@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }} 
                  className="icon-colour home-social-icons"
                 >
                 <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dintzmxlighting"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dintzmx/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
