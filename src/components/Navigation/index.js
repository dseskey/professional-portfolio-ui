import React, {useEffect} from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';
import {capitalizeFirstLetter} from '../../utils/helpers';
function Navigation(props) {
    const {
        setActivePage,
        activePage
      } = props;   
      
      useEffect(() => {
        document.title = 'Dan Seskey - ' + capitalizeFirstLetter(activePage);
      }, [activePage]);

    return (
        <Col data-testid="navigation-bar" id="navigation-bar">
        <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand id='nav-branding-name'eventkey="about" onClick={() => setActivePage('about')}>Dan Seskey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" onSelect={(selectedKey) => setActivePage(selectedKey)}>
                    <Nav.Link eventKey="about"><span className={activePage==='about' ? 'activeSection' : 'inactiveSection'}>About Me</span></Nav.Link>
                    <Nav.Link eventKey="portfolio"><span data-testid="portfolio-nav-item" className={activePage==='portfolio' ? 'activeSection' : 'inactiveSection'}>Portfolio</span></Nav.Link>
                    <Nav.Link eventKey="contact"><span className={activePage==='contact' ? 'activeSection' : 'inactiveSection'}>Contact</span></Nav.Link>
                    <Nav.Link eventKey="resume"><span className={activePage==='resume' ? 'activeSection' : 'inactiveSection'}>Resume</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Col>
    )
}

export default Navigation;