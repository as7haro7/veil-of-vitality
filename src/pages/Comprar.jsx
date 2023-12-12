import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

export const Comprar = ({ show, onClose, onCompra, total }) => {
  const [formData, setFormData] = useState({
    ci: '',
    nombre: '',
    numTarjeta: '',
    nacionalidad: '',
    correo: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.ci.trim() === '' ||
      formData.nombre.trim() === '' ||
      formData.numTarjeta.trim() === '' ||
      formData.nacionalidad.trim() === '' ||
      formData.correo.trim() === ''
    ) {
      setShowAlert(true);
      return;
    }

    console.log('Datos del formulario:', formData);

    onCompra(formData);

    onClose();

    alert('¡Gracias por tu compra!');

    setFormData({
      ci: '',
      nombre: '',
      numTarjeta: '',
      nacionalidad: '',
      correo: '',
    });
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Realizar Pago</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showAlert && (
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            Todos los campos son obligatorios.
          </Alert>
        )}
        <h4>Total a Pagar: {total} Bs.</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="ci">
            <Form.Label>CI</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su CI"
              name="ci"
              value={formData.ci}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numTarjeta">
            <Form.Label>Número de Tarjeta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su número de tarjeta"
              name="numTarjeta"
              value={formData.numTarjeta}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nacionalidad">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nacionalidad"
              name="nacionalidad"
              value={formData.nacionalidad}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="correo">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo electrónico"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Pagar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
