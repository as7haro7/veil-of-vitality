import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart } from "react-icons/fa";function NavbarRes() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary ">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img
                src="./logo.png"
                alt="Logo"
                style={{ marginRight: "0.5rem", height: "30px" }} // Ajusta el estilo según tus necesidades
              />
              Veil of Vitality
            </Navbar.Brand>
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
                  <Nav.Link as={Link} to="/ropa">
                    Ropa Deportiva
                  </Nav.Link>
                  <Nav.Link as={Link} to="/calzado">
                    Calzado
                  </Nav.Link>
                  <Nav.Link as={Link} to="/equipamiento">
                    Equipamiento
                  </Nav.Link>
                  <Nav.Link as={Link} to="/accesorios">
                    Accesorios
                  </Nav.Link>
                  <NavDropdown
                    title="Marcas"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/nike">
                      Nike
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/adidas">
                      Adidas
                    </NavDropdown.Item>
                    
                  </NavDropdown>
                  <Nav.Link as={Link} to="/sobre">
                    Sobre
                  </Nav.Link>
                  <Nav.Link as={Link} to="/carrito">
                  <FaShoppingCart />
                  </Nav.Link>
               
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarRes;
