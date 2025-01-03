import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import He from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/He Still.png";
import MarbleTissues from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/Marble Tissues Still.png";
import STYB from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/STYB Still.png";
import Seance from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/The Seance Still.png";
import Mold from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/Mold Still.png";
import Lluvia from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/Lluvia Still.png";
import RCL from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/RCL Still.png";
import DWCITMON from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/DWCITMON Still.png";
import DontSpeak from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/Dont Speak Still.png";
import JustADrop from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/Just A Drop Still.png";
import Jitter from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/Jitter Still.png";
import Leaching from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/The Leaching Still.png";
import Oz from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/oz Still.png"
import Eureka from "/Users/DavidLee/Documents/GitHub/Portfolio/src/Assets/Projects/Eureka Still.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Seance}
            isBlog={false}
            title="The Seance (Coming Soon)"
            description={
            <>
              Director: Khafre Liggens<br />
              <span style={{ marginLeft: "0px" }}>DP: Afrim Zenuni</span><br />
              <span style={{ marginLeft: "0px" }}>Role: Dimmer Board Operator</span>
            </>
           }
            demoLink="https://www.khafreliggens.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mold}
              isBlog={false}
              title="Mold (Coming Soon)"
              description={
                <>
                  Directors: Afrim Zenuni & Elle Asunta<br />
                  <span style={{ marginLeft: "0px" }}>DP: Afrim Zenuni</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Dimmer Board Operator</span>
                </>
               }
                demoLink="https://www.afrimzenuni.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={STYB}
              isBlog={false}
              title="Scream 'Til You Bleed (Coming Soon)"
              description={
                <>
                  Director: Eli Buie<br />
                  <span style={{ marginLeft: "0px" }}>DP: Audrey Weber</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Dimmer Board Operator</span>
                </>
               }
                demoLink="https://www.instagram.com/brokenradiatorcollective/"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={He}
              isBlog={false}
              title="He (Coming Soon)"
             description={
            <>
              Director: Yihui Hu<br />
              <span style={{ marginLeft: "0px" }}>DP: Aris KaiKiu Lui</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Dimmer Board Operator</span>
            </>
           }
            demoLink="https://www.huyihui.com/he"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lluvia}
              isBlog={false}
              title="Lluvia -Kronovox (M/V)"
              description={
                <>
                  Directors: Victor Garcés & Kronovox<br />
                  <span style={{ marginLeft: "0px" }}>DP: Victor Garcés</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Dimmer Board Operator</span>
                </>
               }
                demoLink="https://youtu.be/fxbLn4J58U4?si=YrBA16QNevl70PXn"
                />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MarbleTissues}
              isBlog={false}
              title="Marble Tissues (Coming Soon)"
              description={
                <>
                  Director: Karson Kane<br />
                  <span style={{ marginLeft: "0px" }}>DP: Nick Emmanuele</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Dimmer Board Operator</span>
                </>
               }
                demoLink="https://www.karsonkane.com/"
                />
          </Col> */}
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Leaching}
              isBlog={false}
              title="The Leaching (Coming Soon)"
              description={
                <>
                  Director: Evan Showalter<br />
                  <span style={{ marginLeft: "0px" }}>DP: Amaryllis Velasquez</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Dimmer Board Operator</span>
                </>
               }
                demoLink="https://www.evanshowalter.com/"
                />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RCL}
              isBlog={false}
              title="Rose Colored Lenses"
              description={
                <>
                  Directors: Tyler Grandalski & Tanja Meyer<br />
                  <span style={{ marginLeft: "0px" }}>DP: Karson Kane</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Dimmer Board Operator</span>
                </>
               }
                demoLink="https://www.youtube.com/watch?v=LbSZFY8m9gI"
                />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DWCITMON}
              isBlog={false}
              title="Dancing While Crying in the Middle of Nowhere -The Mind (Visualizer)"
              description={
                <>
                  Director: Noah Keckler<br />
                  <span style={{ marginLeft: "0px" }}>DP: Sofia Santos</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Best Boy Grip</span>
                </>
               }
                demoLink="https://www.youtube.com/watch?v=t-lxOP3xQqQ&list=PL0C8VuPczShMm4Dv-LH3UMJugu2PPenSB&index=1&ab_channel=theMIND"
                />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DontSpeak}
              isBlog={false}
              title="Don't Speak -Femi Ishola (M/V)"
              description={
                <>
                  Director Dallys Dorsey<br />
                  <span style={{ marginLeft: "0px" }}>DP: Danny Lencioni</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Swing Electric</span>
                </>
               }
                demoLink="https://www.youtube.com/watch?v=ynyfFyVsuy8"
                />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eureka}
              isBlog={false}
              title="Eureka -Femi Ishola (M/V)"
              description={
                <>
                  Director Dallys Dorsey<br />
                  <span style={{ marginLeft: "0px" }}>DP: Danny Lencioni</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Swing Electric</span>
                </>
               }
                demoLink="https://youtu.be/TPpdtjZDYnY?si=ER6Dooji587cn9LN"
                />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JustADrop}
              isBlog={false}
              title="Just a Drop (Coming Soon)"
              description={
                <>
                  Director Evan Showalter<br />
                  <span style={{ marginLeft: "0px" }}>DP: Sofia Santos</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Grip</span>
                </>
               }
                demoLink="https://www.evanshowalter.com/"
                />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jitter}
              isBlog={false}
              title="Jitter (Coming Soon)"
              description={
                <>
                  Director Evan Showalter<br />
                  <span style={{ marginLeft: "0px" }}>DP: Sofia Santos</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Grip</span>
                </>
               }
                demoLink="https://www.evanshowalter.com/"
                />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Oz}
              isBlog={false}
              title="oz -Maybe Roxanne (M/V)"
              description={
                <>
                  Director Jewells Santos<br />
                  <span style={{ marginLeft: "0px" }}>DP: Paige Hochstatter</span><br />
                  <span style={{ marginLeft: "0px" }}>Role: Swing Electric</span>
                </>
               }
                demoLink="https://youtu.be/oaJrfTg-UvE?si=qlxHxymuZ5i7pQ7Y"
                />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
