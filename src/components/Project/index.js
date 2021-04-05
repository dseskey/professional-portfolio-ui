import React, { useState } from 'react';
import {Row, Col, Card } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

function Project({project}) {
    const [hoveredCard, setHoveredCard] = useState('');
    const [iconHover, setIconHover] = useState('');

    /*--Functions to generate each part of the project card. Although this can be done straight in the main return, this makes it easier to work with and triage--*/
    function generateCardTitle(project) {
        const { title } = project;
        return (
            <Card.Title data-testid={`${title}-card-title`} key={title + '-card-title'}>{title}</Card.Title>
        )
    }
    function generateCardDescription(project) {
        const { description } = project;
        return (
            <Card.Text id='project-card-description'> {description}</Card.Text>
        )
    }

    function handleIconMouseEvents(event, socialIconName) {
        if (event.type === 'mouseover') {
            setIconHover(socialIconName);
        } else {
            setIconHover('');
        }
    }

    function generateURLs(urlObj, title) {
        const { type, url } = urlObj
        return (
            <Col key={`${title}-${type}-urlCol`} >
                <SocialIcon key={`${title}-${type}-social-icon`} onMouseOut={(event) => handleIconMouseEvents(event)} onMouseOver={(event) => { handleIconMouseEvents(event, `${title}-${type}`) }} fgColor={iconHover === `${title}-${type}` ? '#007bff' : ''} network={type} url={url} bgColor={iconHover === `${title}-${type}` ? '#FFF' : '#DCE0D9'} alt={type} />
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
        <Col
            data-testid={`${project.title}-col`} key={project.title + '-col'}
            md={4}>
            <Card
                data-projectname={`${project.title}`}
                onMouseEnter={(event) => handleCardHoverFocus(event)}
                onMouseLeave={(event) => handleCardHoverFocus(event)}
                style={{ backgroundImage: `url(${project.imageSRC})` }}
                data-testid={`${project.title}-card`} key={project.title + '-card'}>
                 
                {hoveredCard === `${project.title}-card` &&
                    <div className='projectHoverContainer'>
                        <Card.Body key={project.title + '-card-body-content'}>
                            {project.title &&
                                generateCardTitle(project)
                            }
                            {project.description &&
                                generateCardDescription(project)
                            }
                            <Row id='project-urls-container'>
                                {
                                    project.urls &&
                                    project.urls.map((urlObj) => {
                                        return generateURLs(urlObj, project.title)
                                    })
                                }
                            </Row>

                        </Card.Body>

                    </div>
                }
            </Card>

        </Col>

    
    )
}

export default Project;