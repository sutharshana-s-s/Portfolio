import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sutharshana S S</span>{" "}
            from <span className="purple">Chennai, India</span>.
            <br />
            I’m currently pursuing M.Sc. in <span className="purple">Decision and Computing Sciences (Integrated)</span> at <span className="purple">Coimbatore Institute of Technology</span>.
            <br />
            Recently, I completed an internship as a <span className="purple">Product Engineering Intern</span> at <span className="purple">Smartail Pvt Ltd</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing (Vocalist at CIT Music Club) 🎤
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Data Trends 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 💻
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sutharshana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
