import './App.css';
import React, {useState} from 'react';

import { Container} from 'react-bootstrap';
import Header from './components/Header';

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <Container fluid>
      <Header setActivePage={setActivePage} activePage={activePage}/>
    </Container>
  );
}

export default App;
