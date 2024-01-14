import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sangit from "../../Assets/Projects/sangit.gif";
import todo from "../../Assets/Projects/todo.gif";
import finance from "../../Assets/Projects/finance.png";

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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
