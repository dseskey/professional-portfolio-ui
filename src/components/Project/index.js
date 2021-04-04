import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import projectJson from '../../assets/json/projects.json';
import cardStyles from './cardStyles';
import {SocialIcon} from 'react-social-icons';

function Project() {
    const [hoveredCard, setHoveredCard] = useState('');
    /*--Functions to generate each part of the project card. Although this can be done straight in the main return, this makes it easier to work with and triage--*/
    function generateCardTitle(project) {
        const { title } = project;
        return (
            <Card.Title style={cardStyles.cardHeaderStyle} data-testid={`${title}-card-title`} key={title + '-card-title'}>{title}</Card.Title>
        )
    }
    function generateCardDescription(project) {
        const { description } = project;
        return (
            <Card.Text style={cardStyles.cardProjectDescriptionStyle}> {description}</Card.Text>
        )
    }

    function generateURLs(urlObj, title){
        const {type, url} = urlObj
        return (
            <Col key={`${title}-${type}-urlCol`}>
                <SocialIcon key={`${title}-${type}-social-icon`} network={type} url={url} bgColor='#DCE0D9' alt={type} />
            </Col>
        )
    }

    function handleCardHoverFocus(event) {
        if (event.type === 'mouseenter') {
            setHoveredCard(`${event.target.getAttribute('data-projectname')}-card`);
        } else {
            setHoveredCard('');
        }
    }
    return (
        <Container fluid data-testid='project-container' id='project-container' className='pagesParentContainer'>
            <Row className="pageHeader">
                <h2 data-testid='project-section-header'>My Projects</h2>
            </Row>
            <Row data-testid='projects-card-row' id='projects-card-row'>
                {projectJson.projects.map((project) => {
                    return (
                        <Col
                            data-projectname={`${project.title}`} 
                            onMouseEnter={(event) => handleCardHoverFocus(event)}
                            onMouseLeave={(event) => handleCardHoverFocus(event)}
                            data-testid={`${project.title}-col`} key={project.title + '-col'}
                            md={4}>
                            <Card
                                
                                style={{ ...cardStyles.cardContainerStyle, backgroundImage: `url(${project.imageSRC})` }}
                                data-testid={`${project.title}-card`} key={project.title + '-card'}>
                                {hoveredCard === `${project.title}-card` &&
                                    <div style={cardStyles.cardContainerStyleHover}>
                                        <Card.Body key={project.title + '-card-body-content'}>
                                            {project.title &&
                                                generateCardTitle(project)
                                            }
                                            {project.description &&
                                                generateCardDescription(project)
                                            }
                                            <Row style={{textAlign: 'center'}}>
                                                {
                                                    project.urls &&
                                                    project.urls.map((urlObj) => {
                                                        return generateURLs(urlObj,project.title)
                                                    })
                                                }
                                            </Row>

                                        </Card.Body>

                                    </div>
                                } 
                            </Card>
                            
                        </Col>

                    )
                })}
            </Row>

        </Container >
    )
}

export default Project;