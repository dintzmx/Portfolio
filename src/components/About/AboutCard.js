import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
    Hi Everyone, my name is <span className="purple">David Seungwoo Lee </span>
    and I am a <span className="purple">Lighting Console Programmer</span> based in <span className="purple">Chicago</span>.
            <br />
            <br />
            I was born in Washington D.C. but grew up in Virginia, South Korea, Thailand, Germany, Oregon, and now reside in Illinois.
            <br />
            <br />
        
            I graduated from DePaul University in 2024 with a Degree in Film & Television: Directing and a Minor in Music Industry: Recording.
            <br />
            <br />
            Although my academic career focused on different aspects of filmmaking and music production,
            I personally fell in love with G&E my senior year. 
            <br />
            For the past few months, I have been focusing on DMX/CRMX hardline or wireless network infrastructure,
            pre-programming fx for different fixtures, programming on the fly, board op-ing on sets, 
            and am now honing my skills in creating pre-planned lighting show sets synced to timecode. 
            <br />
            <br />
            Apart from filmmaking, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making coffee and and tea
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing electric guitar!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Become the cavalry."{" "}
          </p>
          <footer className="blockquote-footer">David</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
