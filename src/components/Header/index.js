import React from 'react';
import {Row} from 'react-bootstrap';
import Navigation from '../Navigation';
function Header({setActivePage, activePage}){
    return(
        <Row data-testid='header-row' id='header' >
            <Navigation setActivePage={setActivePage} activePage={activePage}/>
        </Row>
    )
}

export default Header;