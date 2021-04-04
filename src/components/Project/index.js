import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import projectJson from '../../assets/json/projects.json';
function Project() {
    return (
        <Container fluid data-testid='project-container' id='project-container' className='pagesParentContainer'>
            <Row className="pageHeader">
                <h2 data-testid='project-section-header'>My Projects</h2>
            </Row>
            <Row>
                {projectJson.projects.map((project) => {
                    return (
                        <Col data-testid={`${project.title}-col`} key={project.title + '-col'}>
                            <Card data-testid={`${project.title}-card`} key={project.title + '-card'} style={{ width: '18rem' }}>
                                {project.imageSRC &&
                                    <Card.Img  data-testid={`${project.title}-card-image`} key={project.title + '-card-image'} variant="top" src={project.imageSRC} />
                                }
                                <Card.Body key={project.title + '-card-body-content'}>
                                    {project.title &&
                                        <Card.Title data-testid={`${project.title}-card-title`} key={project.title + '-card-title'}>{project.title}</Card.Title>
                                    }
                                    {project.description &&
                                        <Card.Text data-testid={`${project.title}-card-text`} key={project.title + '-col'}>
                                            {project.description}
                                        </Card.Text>

                                    }
                                </Card.Body>
                                {/* <ListGroup data-testid={`${project.title}-tech-list`} key={project.title + '-tech-list'} className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup> */}
                                <Card.Body data-testid={`${project.title}-card-body-links`} key={project.title + '-card-body-links'}>
                                    {project.githubURL &&
                                        <Card.Link href={project.githubURL}>Github</Card.Link>
                                    }
                                    {project.appURL &&
                                        <Card.Link href={project.appURL}>Application Page</Card.Link>
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container>
    )
}

export default Project;