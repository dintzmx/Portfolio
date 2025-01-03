import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            I was born in <span className="purple">Washington D.C.</span>, but grew up in <span className="purple">Virginia, South Korea, Thailand, Germany, Oregon</span> and now reside in <span className="purple">Chicago, Illinois.</span>
            <br />
            <br />
            I have two years of <span className="purple">military </span> and<span className="purple"> social services experience (2018-2020)</span>, for serving the <span className="purple">South Korean military </span>in order to retain my <span className="purple">dual citizenship</span> with the <span className="purple">United States</span>.
            <br />
            <br />
            I graduated from <span className="purple">DePaul University</span> in 2024 with a Bachelors of Fine Arts in <span className="purple">Film & Television: Directing </span> 
            and a <span className="purple">Minor in Music Industry: Recording</span>, where I found <span className="purple">G&E my senior year</span> and <span className="purple">never looked back!</span>
            <br />
            <br />
            <span className="purple">Apart from filmmaking,</span> some other <span className="purple">activities that I love</span> to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Climbing the ranks of Valorant</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Brewing coffee and and tea</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Playing electric guitar</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Learning to code this website!</span>
            </li>
          </ul>
          <br />

          <p style={{ color: "rgb(55, 219, 222, 1)" }}>
            "Become the cavalry."{" "}
          </p>
          <footer className="blockquote-footer">David</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
