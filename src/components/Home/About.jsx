import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaShopify } from "react-icons/fa";
import { SiGithub, SiGmail, SiHtml5, SiLeetcode, SiNetlify, SiTypescript, SiVercel, SiVisualstudiocode } from "react-icons/si";
import Techstack from "../Skillset/Techstack";
import { DiJavascript1, DiReact } from "react-icons/di";
import ProjectCard from "../Projects/ProjectCard";
import currency from "../../assets/projects/currency.jpeg";
import todo from "../../assets/projects/Todo.png";
import TicTac from "../../assets/projects//tictac.png";

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
                            Graduate From Delhi University ,Delhi in 2018
                            <br></br>
                            Post Graduate From Career Point University ,kota in 2022
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
                    <h1 className="project-heading">
                    Core Professional <strong className="yellow">Expertise </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiJavascript1/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiTypescript />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiReact />
                    </Col>
        
                    <Col xs={4} md={2} className="tech-icons">
                        <FaShopify />
                    </Col>
                       
        
                    
                </Row>
                <h1 className="project-heading">
          <strong className="yellow"> Tools </strong> I primarily use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiGithub/>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                      <SiNetlify/>
                    </Col>
            </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                
                <h1 className="project-heading">
                    Recent Top <strong className="yellow">Works </strong>
                </h1>
                <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={currency}
                            isBlog={false}
                            title="Currency-Convertor"
                            description="An intuitive and lightweight Currency Converter app developed with React.js, designed for real-time currency conversion. It seamlessly fetches up-to-date exchange rates from an API, ensuring accurate calculations."
                            ghLink="https://github.com/ajaykumar1298/currency-convertor-react"
                            demoLink="https://global-currency-convertor.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={todo}
                            isBlog={false}
                            title="Todo - list"
                            description="A sleek and efficient Todo List app built with React.js for seamless task management. Easily add, edit, delete, and complete tasks with a smooth, responsive UI. Stay organized and boost productivity effortlessly."
                            ghLink="https://github.com/ajaykumar1298/todo-list-react"
                            demoLink="https://global-todo-list.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={TicTac}
                            isBlog={false}
                            title="Tic tac Toe"
                            description="A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript, enjoy a smooth, interactive experience. With a responsive design and seamless gameplay."
                            ghLink="https://github.com/ajaykumar1298/Tic-Tac-Toe/"
                            demoLink="https://ajaykumar1298.github.io/Tic-Tac-Toe/"
                        />
                    </Col>

                </Row>
        
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
                            <li className="social-icons">
                                <a href="mailto:ajaykumarak1209@gmail.com" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" aria-label="gmail">
                                    <SiGmail />
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
