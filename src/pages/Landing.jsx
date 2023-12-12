import React from "react";
import Caruse from "../components/Carusel";
import CustomCard from "../components/CustomCard";

export const Landing = () => {
  return (
    <>
      <Caruse />
      <div className="container mt-5">
        <h2 className="text-center">Ofertas Especiales</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="img/p1.jpg"
                className="bd-placeholder-img card-img-top"
                alt="Oferta 1"
              />
              <div className="card-body">
                <p className="card-text">
                  Oferta especial en zapatillas para correr. ¡Aprovecha ahora!
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Ver Detalles
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Comprar
                    </button>
                  </div>
                  <small className="text-muted">Hasta agotar existencias</small>
                </div>
              </div>
            </div>
          </div>
          {/* Repite este bloque para más ofertas */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="img/p2.jpg"
                className="bd-placeholder-img card-img-top"
                alt="Oferta 2"
              />
              <div className="card-body">
                <p className="card-text">
                  ¡Descuento del 20% en todos los productos de fitness!
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Ver Detalles
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Comprar
                    </button>
                  </div>
                  <small className="text-muted">
                    Oferta por tiempo limitado
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="img/p4.jpg"
                className="bd-placeholder-img card-img-top"
                alt="Oferta 2"
              />
              <div className="card-body">
                <p className="card-text">
                  ¡Descuento del 20% en todos los productos de fitness!
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Ver Detalles
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Comprar
                    </button>
                  </div>
                  <small className="text-muted">
                    Oferta por tiempo limitado
                  </small>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fin de los bloques de ofertas */}
          {/* <CustomCard
            imageSrc="img/p2.jpg"
            title="Producto 1"
            description="Descripción del producto 1."
            price="49.99 Bs."
          /> */}
        </div>
      </div>
    </>
  );
};
