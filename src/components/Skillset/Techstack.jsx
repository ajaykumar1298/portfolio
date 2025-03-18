import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiPython, DiBootstrap, DiWordpress, DiCss3 } from "react-icons/di";
import { SiMaterialui, SiGraphql, SiSolidity, SiRedux, SiMongodb, SiHtml5, SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaShopify } from "react-icons/fa";

const Techstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaShopify />
            </Col>
            
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiWordpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss />
            </Col>
            


            
        </Row>
    );
};

export default Techstack;
