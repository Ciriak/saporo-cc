import { Navbar, Nav, Container } from 'react-bootstrap';
import useData from '../../hooks/data.hook';
import useSaporoHistory from '../../hooks/history.hook';

export default function SNavbar() {
  const { history, resetHistoryToIndex } = useSaporoHistory();
  const { setActiveItem } = useData();
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">Saporo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {history.map((entry, entryIndex) => {
              return (
                <Nav.Link
                  href="#home"
                  key={entryIndex}
                  onClick={() => {
                    setActiveItem(entry);
                    resetHistoryToIndex(entryIndex);
                  }}
                >
                  {entry.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
