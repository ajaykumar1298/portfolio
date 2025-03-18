import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import donation from "../assets/projects/donation.png";
import currency from "../assets/projects/currency.jpeg";
import todo from "../assets/projects/Todo.png";
import Notes from "../assets/projects/notes.png";
import weather from "../assets/projects/weather.png";
import TicTac from "../assets/projects//tictac.png";
import passGen from "../assets/projects/passGen.png"
import mathPower from "../assets/projects/mathPower.png"
import drumkit from "../assets/projects/drumkit.png"

const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
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
                            description="A simple and efficient **Currency Converter** app built with **React.js** that allows users to convert currencies in real-time. It fetches the latest exchange rates from an API and provides a seamless user experience with a clean and responsive interface. 🚀💰"
                            ghLink="https://github.com/ajaykumar1298/currency-convertor-react"
                            demoLink="https://global-currency-convertor.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={todo}
                            isBlog={false}
                            title="Todo - list"
                            description="A sleek and intuitive **Todo List** app built with **React.js** to help you organize tasks efficiently. It allows users to add, edit, delete, and mark tasks as complete, ensuring better productivity with a smooth and responsive UI. ✅📝"
                            ghLink="https://github.com/ajaykumar1298/todo-list-react"
                            demoLink="https://global-todo-list.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={TicTac}
                            isBlog={false}
                            title="Tic tac Toe"
                            description="A classic **Tic-Tac-Toe** game built with **HTML, CSS, and JavaScript**, enhanced with **Firebase** for real-time multiplayer gameplay. Play with friends online, track moves instantly, and enjoy a smooth, interactive gaming experience. 🎮❌⭕"
                            ghLink="https://github.com/ajaykumar1298/Tic-Tac-Toe/"
                            demoLink="https://ajaykumar1298.github.io/Tic-Tac-Toe/"
                        />
                    </Col>

                    
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={passGen}
                            isBlog={false}
                            title="Password Generator"
                            description="A simple and secure password generator built with React. The app provides real-time password generation,copy-to-clipboard functionality"
                            ghLink="https://github.com/ajaykumar1298/password-generator"
                            demoLink="https://ajay1209-password-generator.vercel.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={mathPower}
                            isBlog={false}
                            title="Math Power"
                            description="Math Power is a web app that helps users improve their math skills by finding the square, cube, and test results of any number. It provides instant correct answers, making learning interactive and effective."
                            ghLink="https://github.com/ajaykumar1298/Math-Power/"
                            demoLink="https://ajaykumar1298.github.io/Math-Power/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={drumkit}
                            isBlog={false}
                            title="Drum Kit"
                            description="The Drum Kit is a web-based application that allows users to play a digital drum set using their keyboard or mouse. This project provides an interactive and engaging way for users to experience drumming without needing a physical drum set."
                            ghLink="https://github.com/ajaykumar1298/drum-kit"
                            demoLink="https://ajaykumar1298.github.io/drum-kit/"
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
};

export default Projects;
