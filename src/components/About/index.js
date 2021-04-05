import React from 'react';
import { Container, Row } from 'react-bootstrap';

function About(){
    return(
        <Container fluid data-testid='about-container' id='about-container' className='pagesParentContainer'>
            <Row className="pageHeader">
                <h2 data-testid='about-section-header'>About Me</h2>
            </Row>
            <Row className='aboutTextSection'>
                <section >
                My name is Daniel Seskey and I am a graduate of Pennsylvania State University where I completed the Master of Software Engineering degree in August 2016. Prior to studying at Penn State, I completed a BSE in Computer Engineering with a focus in Nuclear Engineering at the University of Pittsburgh.
                </section>
            </Row>
            <Row >
                <section id='about-image-section'>
                    <img src='https://s3.us-east-2.amazonaws.com/dseskey.com/images/professional-portfolio/WCKM-35.jpeg' style={{ width: "50%" }} alt="engineer" />
                </section>
            </Row>
            <Row className='aboutTextSection' data-testid='about-text-section'>
                <section>
                    Growing up in Pittsburgh, I had the uncommon privilege to witness firsthand the city's transformation from a heavy industrial town to a technology and medical innovation hub. This opportunity allowed me to participate in numerous activities growing up within the public school system such as attending summer architecture courses at Carnegie Mellon University, participating in Pitt's and CMU's educational robotics program, along with other technology based programs. The culmination of these opportunities led me into the world of engineering.            
                </section>
            </Row>
            <Row className='aboutTextSection'>
                <section>
                My interest within the field of Computer Engineering field fall in the software development life cycle, software architecutre, hardware design and testing fields. Upon completion of a software engineering course at the University of Pittsburgh, I discovered my passion for the Software Delivery Life Cycle (SDLC). This passion led me to pursue my Masters at Penn State to further understand software development and build my skillset. Software development starts with what seems to be a simple idea to solve a problem and with constant revision, component design and testing, and updates the project becomes a complex puzzle. This desire to solve puzzles pushed me into architecture design and its evolution.
                </section>
            </Row>
            <Row className='aboutTextSection'>
                <section >
                Working for companies such as Disney/ESPN, Travelers, M*Modal and the University of Pittsburgh I have worked in various domains. These domains include sports entertainment, natural language processing and clinical document improvement in the medical field, and epidemiology. From these, I have taken pieces of each into every project I work on as all of the experiences together have made me the architect and engineer I am today. They have also helped me to start my own company helping others create software systems for various needs. Throughout all of this, I have had to learn new technologies on the fly, mentor junior engineers and architects, lead development teams, create what at times seemed to be the impossible, bring in new technologies into companies, and push the envelope. I have both failed and succeeded, and continue to grow. From this I have learned that failure isn’t fatal, and that success is not final. Success consists of going from one failure to the next with no loss of enthusiasm. Knowing these important lessons have led me to continue to grow and develop in my fields of interest, taught me to not be afraid to try new things, that it is okay to fail fast, and to continue my passion of teaching others and sharing my knowledge.
                </section>
            </Row>

        </Container>
    )
}

export default About;