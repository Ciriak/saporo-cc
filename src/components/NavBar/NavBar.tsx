import { Navbar, Nav, Container } from 'react-bootstrap';
import useData from '../../hooks/data.hook';
import useSaporoHistory from '../../hooks/history.hook';

export default function SNavbar() {
  const { history, resetHistoryToIndex, back } = useSaporoHistory();
  const { setActiveItem } = useData();
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">Saporo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {history.length > 1 && (
              <Nav.Link
                href="#"
                onClick={() => {
                  /**
                   * Update the history
                   */
                  back();
                  /**
                   * Manually set the active item
                   */
                  setActiveItem(history[history.length - 2]);
                }}
              >
                {`< BACK <`}
              </Nav.Link>
            )}

            {history.map((entry, entryIndex) => {
              return (
                <Nav.Link
                  href="#"
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
