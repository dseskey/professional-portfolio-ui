import './App.css';
import React, {useState} from 'react';

import { Container, Row} from 'react-bootstrap';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import {normalizePageNames} from './utils/helpers';

function App() {
  const [activePage, setActivePage] = useState('about');
 
  return (
    <Container fluid>
      <Header setActivePage={setActivePage} activePage={activePage}/>
      <Row id='sections-container'>
        {normalizePageNames(activePage) === 'about' && <About/> }
        {normalizePageNames(activePage) === 'portfolio' && <Project/> }
        {normalizePageNames(activePage) === 'contact' &&  <Contact/> }
        {normalizePageNames(activePage) === 'resume' &&  <Resume/> }
      </Row>
      <Footer/>
    </Container>
  );
}

export default App;
