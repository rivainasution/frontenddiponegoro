import Container from 'react-bootstrap/Container';
import {
  Nav, 
  Navbar, 
  Offcanvas
} from 'react-bootstrap';

function NavigationBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3" fixed="top" >
          <Container fluid>
            <Navbar.Brand href="#">Rapid Technology</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start">
                  <Nav.Link href="/" className='navs'>Home</Nav.Link>
                  <Nav.Link href="/setup" className='navs'>Setup</Nav.Link>
                  <Nav.Link href="/generate" className='navs'>Generate</Nav.Link>
                  <Nav.Link href="/history" className='navs'>History</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;