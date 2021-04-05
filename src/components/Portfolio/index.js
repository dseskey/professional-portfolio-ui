import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import projectJson from '../../assets/json/projects.json';
import Project from '../Project';
function Portfolio() {

    return (
        <Container fluid data-testid='portfolio-container' id='portfolio-container' className='pagesParentContainer'>
            <Row className="pageHeader">
                <h2 data-testid='portfolio-section-header'>My Projects</h2>
            </Row>
            <Row data-testid='projects-card-row' id='projects-card-row'>
                {projectJson.projects.map((project) => {
                    return (
                        <Project key={`${project.title}-project`} project={project} />
                    )
                })}
            </Row>

        </Container >
    )
}

export default Portfolio;