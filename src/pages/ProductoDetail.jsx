import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DetalleProducto = ({ show, onClose, title, description, price, imageSrc }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageSrc} alt={title} className="img-fluid" />
        <p>{description}</p>
        <p>Precio: {price}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetalleProducto;
