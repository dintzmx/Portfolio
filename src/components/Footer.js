import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>David Seungwoo Lee</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>DintzMX Lighting LLC | Est. 2024 </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            */}
           <li className="social-icons">
              <a
                href="tel:+17734418287"
                className="icon-colour"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlinePhone style={{ color: "white", fontSize: "1.0em" }} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:your-email@example.com" // Replace with your actual email address
                className="icon-colour"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail style={{ color: "white", fontSize: "1.0em" }} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/dintzmxlighting"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/dintzmx"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dintzmx/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li> 
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
