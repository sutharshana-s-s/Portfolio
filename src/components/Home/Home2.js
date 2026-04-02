import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate student in <b className="purple">Decision and Computing Sciences</b>, with a keen interest in software, data analytics and web development. 
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple"> Python, Java, C, and R </b>
              </i>
              — and I enjoy working on data-driven solutions and back-end systems.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  DBMS, Data Structures, OOPS, and Data Visualization.{" "}
                </b>
              </i>
              <br />
              <br />
              I love building projects with modern frameworks like 
              <b className="purple"> Angular, React.js </b> and 
              <i>
                <b className="purple"> Node.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
