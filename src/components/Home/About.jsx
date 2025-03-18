import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            Hi, my name is <span className="yellow">Ajay Kumar </span>
                            and I'm from <span className="yellow">Delhi</span>
                            <br />
                            <br />
                            Graduate From Delhi University ,Delhi in 2019
                            <br />
                            <br />
                            As a<b className="yellow"> Frontend - web </b>developer, I enjoy tackling new challenges and continuously expanding my skillset.
                            <br />
                            <br />I am proficient in
                            <b className="yellow"> Javascript, </b>
                            as well as have knowledge in programming languages such as TS,
                            <br />
                            <i>
                                <b className="yellow"> modern Javascript libraries and frameworks</b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="yellow"> React.js</b>
                            </i>
                            <br />
                           
                            <br />
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={LaptopImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a href="https://github.com/ajaykumar1298/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" aria-label="github">
                                    <AiFillGithub />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a href="https://www.linkedin.com/in/ajay-kumar-684bbb238" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" aria-label="linkedin">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default About;
