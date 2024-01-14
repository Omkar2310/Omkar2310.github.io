import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Omkar Mankar </span>
            from <span className="purple"> Maharastra, India.</span>
            <br />
            I am working as Software Engineer at Cross Couuntry Healthcare.
            <br />
            I have completed my Bachelor of Enginnering (Computer) from PICT
            Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Discipline is choosing between WHAT YOU WANT NOW🤞and WHAT YOU WANT THE MOST❤️!"{" "}
          </p>
          <footer className="blockquote-footer">OM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
