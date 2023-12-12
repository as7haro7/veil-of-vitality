import React, { useState } from "react";
import YoutubeVideo from "../components/YoutubeVideo";
import CustomCard from "../components/CustomCard";
import BuscadorRopaDeportiva from "../components/BuscadorRopaDeportiva";
import SideMenu from "../components/SideMenu";
import { useRef } from "react";
export const Accesorios = () => {
  const productosDeAccesorios = [
    {
      id: 1,
      imageSrc: "img/acc1.jpg",
      title: "Bolso Deportivo",
      description: "Bolso espacioso para llevar tus pertenencias al gimnasio.",
      price: "39.99 Bs.",
    },
    {
      id: 2,
      imageSrc: "img/acc2.jpg",
      title: "Gorra Deportiva",
      description: "Gorra ajustable para protección solar durante tus entrenamientos.",
      price: "14.99 Bs.",
    },
    {
      id: 3,
      imageSrc: "img/acc3.jpg",
      title: "Banda para el Pelo",
      description: "Banda elástica para mantener el cabello en su lugar durante el ejercicio.",
      price: "9.99 Bs.",
    },
    {
      id: 4,
      imageSrc: "img/acc4.jpg",
      title: "Botella Deportiva",
      description: "Botella resistente y práctica para mantenerte hidratado durante tus entrenamientos.",
      price: "12.99 Bs.",
    },
    {
      id: 5,
      imageSrc: "img/acc5.png",
      title: "Toalla Deportiva",
      description: "Toalla absorbente ideal para llevar al gimnasio o a tus actividades deportivas.",
      price: "19.99 Bs.",
    },
    {
      id: 6,
      imageSrc: "img/acc6.jpg",
      title: "Muñequeras",
      description: "Muñequeras ajustables para mayor soporte durante el levantamiento de pesas.",
      price: "7.99 Bs.",
    },
  ];

  const videoId = "NljGurzPM2g";
  const [productosFiltrados, setProductosFiltrados] = useState(
    productosDeAccesorios
  );
  const videoSectionRef = useRef(null);
    const cardsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
  const handleSearch = (resultados) => {
    setProductosFiltrados(resultados);
  };

  return (
    <>
         <div className="container-fluid">
      <div className="row flex-nowrap">
      <div className="col-md-3 d-none d-md-block px-0" style={{ maxWidth: '130px', borderRight: '1px solid #ddd' }}>
      <SideMenu
        videoSectionRef={videoSectionRef}
        cardsSectionRef={cardsSectionRef}
        contactSectionRef={contactSectionRef}
      />
    </div>
    <main className="col ps-2 pt-2">
        <h2>Equipamiento</h2>
        <h2>Accesorios Deportivos</h2>
        <div className="d-flex justify-content-center" ref={videoSectionRef}>
          <YoutubeVideo videoId={videoId} />
        </div>
        <br />
        <h2 className="display-4 mb-4">
          ¡Mejora tu rendimiento con nuestros accesorios deportivos!
        </h2>

        <BuscadorRopaDeportiva
          productos={productosDeAccesorios}
          onSearch={handleSearch}
        />

        <div className="row" ref={cardsSectionRef}>
          {productosFiltrados.length === 0 ? (
            // Mostrar todos los productos si no hay resultados de búsqueda
            productosDeAccesorios.map((producto) => (
              <CustomCard
                key={producto.id}
                imageSrc={producto.imageSrc}
                title={producto.title}
                description={producto.description}
                price={producto.price}
              />
            ))
          ) : (
            // Renderizar productos filtrados
            productosFiltrados.map((producto) => (
              <CustomCard
                key={producto.id}
                imageSrc={producto.imageSrc}
                title={producto.title}
                description={producto.description}
                price={producto.price}
              />
            ))
          )}
        </div>
        <div  ref={contactSectionRef}></div>
      </main>
      </div>
    </div>
    </>
  );
};

