import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import grocery from "../../Assets/Projects/grocery.png";
import social from "../../Assets/Projects/social.png";
import flight from "../../Assets/Projects/flight.png";

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
              imgPath={grocery}
              isBlog={false}
              title="Grocery Shopping Assistant"
              description="An intelligent assistant to optimize grocery purchases, minimize costs, and suggest alternative products. Built with Next.js, Tailwind CSS, and MySQL. Implemented greedy algorithms and hashing techniques for fast product searches and cost optimization."
              ghLink="https://github.com/sutharshana-s-s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social Media Influence Game"
              description="A simulation platform to analyze influencer strategies using Game Theory and voting data. Developed with Flask, Python, and MySQL. Visualized Nash Equilibria and strategy evolution to understand social media impact."
              ghLink="https://github.com/sutharshana-s-s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Data Live Tracking & Analysis"
              description="A real-time system to scrape, process, and analyze live flight data using Python, Selenium, and Tkinter. Integrated an alert engine for abnormal flight behaviors and pushed data to a Power BI dashboard for dynamic visualization."
              ghLink="https://github.com/sutharshana-s-s"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
