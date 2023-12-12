import { React, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import { Comprar } from "./Comprar";

export const Carrito = () => {
  const [showModalCompra, setShowModalCompra] = useState(false);

  const handleCompra = (formData) => {
    console.log("Realizar compra con datos:", formData);
  };

  const handleCloseCompra = () => {
    setShowModalCompra(false);
  };
  // Ejemplo de datos de productos en el carrito
  const productos = [
    { id: 1, nombre: "Polera Paris", precio: 200, imagen: "img/p1.jpg" },
    { id: 2, nombre: "Zapatillas Nike B12", precio: 300, imagen: "img/p2.jpg" },
    { id: 3, nombre: "Bolso 2xl nikke", precio: 250, imagen: "img/adi5.jpg" },
  ];

  // Calcular el total de los productos en el carrito
  const total = productos.reduce((acc, producto) => acc + producto.precio, 0);

  return (
    <Container className="mt-4">
      <h2>Carrito de Compras</h2>
      <ListGroup>
        {productos.map((producto) => (
          <ListGroup.Item key={producto.id}>
            <Row>
              <Col md={3}>
                <Card.Img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-fluid"
                />
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>Precio: {producto.precio} Bs.</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="mt-4">
        <h5>Total: {total} Bs.</h5>
        <Button onClick={() => setShowModalCompra(true)} variant="dark">
          Realizar Compra
        </Button>
        <Comprar
          show={showModalCompra}
          onClose={handleCloseCompra}
          onCompra={handleCompra}
          total={total}
        />
      </div>
    </Container>
  );
};
