import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sangit from "../../Assets/Projects/sangit.gif";
import todo from "../../Assets/Projects/todo.gif";
import finance from "../../Assets/Projects/finance.png";
import shopping from "../../Assets/Projects/shopping.webp";
import pothole from "../../Assets/Projects/pothole.webp";

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
        <Row style={{alignItems: "center", display: 'flex', flexDirection: 'column' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sangit}
              isBlog={false}
              title="Sangit App"
              description="WebApp for listening to the music which consumes the Spotify API. Used React, Firebase, MUI for creating this app. User can filter the music based on the genre."
              ghLink="https://github.com/omkar2310/sangit-app"
              demoLink="https://sangit-app.firebaseapp.com/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todist Clone"
              description="WebApp for managing the productivity by creating a todo list along with categorization of the tasks. Technologies used are React, MUI."
              ghLink="https://github.com/omkar2310/todoist"
              // demoLink="https://sangit-app.firebaseapp.com/"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Finance App"
              description="WebApp for managing the finances by adding the expenses along wiht a visual representation of each expense."
              ghLink="https://github.com/omkar2310/artha-sakshar"
              demoLink="https://om-trackartha.vercel.app"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Amazon Clone App"
              description="Built amazon clone where we can add items to the cart, place order view the items."
              ghLink="https://github.com/Omkar2310/amazon-clone"
              demoLink="https://clone-f2c03.firebaseapp.com/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pothole}
              isBlog={false}
              title="Pothole Fixit App"
              description="App for Pothole Detection using Deep Learning. Clicked image is detected for pothole presence
              If pothole is present complaint forwarded to PWD department, User can track their complaints"
              ghLink="https://github.com/Omkar2310/PotholeFixitApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
