import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';


function App() {
  return (
    <>
    <div className="App">
      <div className="App-header">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;
