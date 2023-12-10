import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarRes() {
  return (
    <>
     {['md'].map((expand) => (
  <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
    <Container fluid>
      <Navbar.Brand href="#">Veil of Vitality</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Categorías
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#ropa">Ropa Deportiva</Nav.Link>
            <Nav.Link href="#calzado">Calzado</Nav.Link>
            <Nav.Link href="#equipamiento">Equipamiento</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
            <NavDropdown
              title="Marcas"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item href="#nike">Nike</NavDropdown.Item>
              <NavDropdown.Item href="#adidas">Adidas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#otras-marcas">Otras Marcas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
))}

    </>
  );
}

export default NavbarRes;