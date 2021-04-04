import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    const [iconHover, setIconHover] = useState();

    function handleMouseOverIcon(socialIconName){
        setIconHover(socialIconName);
    }

    function handleMouseOutIcon(event){
        setIconHover('');
    }
    return (
        <Row data-testid='footer-row' id='footer-container'>
            <Col>
                <span name='linkedin' className='socialFooterIconContainer' >
                    {console.log(iconHover)}
                    <SocialIcon onMouseOut={(event) => {handleMouseOutIcon(event)}} onMouseOver={(event) => {handleMouseOverIcon('linkedin')}} network='linkedin' url='https://www.linkedin.com/in/danielseskey' fgColor={iconHover==='linkedin' ? '#007bff' : ''} bgColor={'#DCE0D9'} alt="linkedin"/>
                </span>
                <span name='github' data-testid='github-icon' className='socialFooterIconContainer'>
                    <SocialIcon onMouseOut={(event) => {handleMouseOutIcon(event)}} onMouseOver={(event) => {handleMouseOverIcon('github')}} network='github' url='https://github.com/dseskey' fgColor={iconHover==='github' ? '#007bff' : ''} bgColor='#DCE0D9' alt="github" />
                </span>
            </Col>
        </Row>
    )
}

export default Footer;