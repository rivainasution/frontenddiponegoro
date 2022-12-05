import Logo from '../../assets/rapid2.png';
import {
  Container, 
  Nav, 
  Navbar, 
  Offcanvas
} from 'react-bootstrap';

function Header(prop) {
  const menu = ["Home", "Setup", "Generate", "History"];

  const navigation = () => {
    console.log(menu.map);
    return menu.map((item, idx) => {
      return <Nav.Link className='navs' onClick={() => prop.onClick(idx+1)} >{item}</Nav.Link>
    }) 
  }
  return(
    <div>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3" fixed="top" >
          <Container fluid>
            <img src={Logo} alt="logo" class="img-fluid" width= "200" />
            {/* <Navbar.Brand href="#">Rapid Technology</Navbar.Brand> */}
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
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {navigation()}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;