import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import ItemsList from './components/ItemsList/ItemsList';
import ItemDetails from './components/ItemDetails/ItemDetails';
import useData from './hooks/data.hook';

function App() {
  const { activeItem } = useData();

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col md={8}>
            <ItemsList />
          </Col>
          <Col>
            {activeItem && <ItemDetails item={activeItem} />}
            {!activeItem && <span>No item selected !</span>}
          </Col>
        </Row>
        <Row>
          <small className="text-secondary mt-4">
            Note: as you can see this app doesn't use Router or built-in browser history, everything is manager via the state
          </small>
        </Row>
      </Container>
    </div>
  );
}

export default App;
