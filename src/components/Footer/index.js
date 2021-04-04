import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  
    return (
        <Row data-testid='footer-row' id='footer-container'>
            <Col style={{'textAlign':'center'}}>
                <span className='socialFooterIconContainer'>
                    <SocialIcon network='linkedin' url='https://www.linkedin.com/in/danielseskey' bgColor='#DCE0D9' alt="linkedin"/>
                </span>
                <span data-testid='github-icon' className='socialFooterIconContainer'>
                    <SocialIcon network='github' url='https://github.com/dseskey' bgColor='#DCE0D9'  alt="github" />
                </span>
            </Col>
        </Row>
    )
}

export default Footer;