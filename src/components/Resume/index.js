import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import pdfResume from '../../assets/pdf/SeskeyResume.pdf';
import skillsJson from '../../assets/json/skills.json';

function Resume() {
    const tableStyle = { width: '18rem', marginTop: '1em', marginBottom: '1em', textAlign: 'center', background: 'grey', color: 'black' };
    return (
        <Container fluid data-testid='resume-container' id='resume-container' className='pagesParentContainer'>
            <Row className="pageHeader">
                <h2 data-testid='resume-section-header'>My Resume</h2>
            </Row>
            <Row id='resume-section-description'>
                The tables below display various technologies, infrastructures, etc that I have worked with. You can also download a PDF version of my <a href={pdfResume} rel="noreferrer"  target="_blank"> resume</a>.
            </Row>
            <Row id='resume-proficiencies-section' data-testid='resume-proficiencies-section'>
                {skillsJson.topics.map((topic) => {
                    return (
                        <Col data-testid={`${topic.title}-table`} key={topic.title+'-table-col'} className='resumeSkillTable'>
                            <Card key={topic.title+'-card'}style={tableStyle}>
                                <Card.Header key={topic.title+'-card-header'} className='skillTableHeader'>{topic.title}</Card.Header>
                                <ListGroup data-testid={`${topic.title}-list-group`} key={topic.title+'-list-group'} variant="flush">
                                    {topic.skills.map((skill) => {
                                        return (
                                            <ListGroup.Item key={topic+'-'+skill+'-list-item'}>{skill}</ListGroup.Item>
                                        )
                                    })
                                    }
                                </ListGroup>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container>
    )
}

export default Resume;