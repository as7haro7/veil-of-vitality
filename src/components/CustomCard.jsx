// CustomCard.jsx
import React, { useState } from 'react';
import DetalleProducto from '../pages/ProductoDetail';
import Button from 'react-bootstrap/Button';

const CustomCard = ({ imageSrc, title, description, price }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
  };

  const handleShowDetails = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={imageSrc} className="bd-placeholder-img card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Precio: {price}</p>
        </div>
        <div className="card-footer d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={handleShowDetails}
          >
            Más Detalles
          </button>
          <div className="mx-2"></div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={handleAddToCart}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? 'Añadido al carrito' : 'Añadir al carrito'}
          </button>
        </div>
      </div>

      {/* Renderizar el componente MyModal */}
      <DetalleProducto
        show={showModal}
        onClose={handleCloseModal}
        title={title}
        description={description}
        price={price}
        imageSrc={imageSrc}
      />
    </div>
  );
};

export default CustomCard;
