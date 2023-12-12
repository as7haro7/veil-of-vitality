import React, { useState } from "react";
import YoutubeVideo from "../components/YoutubeVideo";
import CustomCard from "../components/CustomCard";
import BuscadorRopaDeportiva from "../components/BuscadorRopaDeportiva";
import SideMenu from "../components/SideMenu";
import { useRef } from "react";
export const Equipamiento = () => {
  const productosDeEquipamiento = [
    {
      id: 1,
      imageSrc: "img/equip1.jpg",
      title: "Mancuernas Ajustables",
      description: "Mancuernas versátiles para entrenamientos de fuerza.",
      price: "59.99 Bs.",
    },
    {
      id: 2,
      imageSrc: "img/equip2.jpg",
      title: "Banda de Resistencia",
      description: "Banda elástica para ejercicios de resistencia.",
      price: "19.99 Bs.",
    },
    {
      id: 3,
      imageSrc: "img/equip3.jpg",
      title: "Rueda Abdominal",
      description: "Rueda para fortalecer los músculos abdominales.",
      price: "29.99 Bs.",
    },
    {
      id: 4,
      imageSrc: "img/equip4.jpg",
      title: "Colchoneta de Yoga",
      description: "Colchoneta cómoda para prácticas de yoga y estiramientos.",
      price: "34.99 Bs.",
    },
    {
      id: 5,
      imageSrc: "img/equip5.jpg",
      title: "Cuerda para Saltar",
      description: "Cuerda ajustable para entrenamientos de cardio.",
      price: "14.99 Bs.",
    },
    {
      id: 6,
      imageSrc: "img/equip6.jpg",
      title: "Guantes de Levantamiento de Pesas",
      description: "Guantes acolchados para protección durante el levantamiento de pesas.",
      price: "24.99 Bs.",
    },
  ];

  const videoId = "CK_qxRtxPPc";
  const [productosFiltrados, setProductosFiltrados] = useState(
    productosDeEquipamiento
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
        <div className="d-flex justify-content-center" ref={videoSectionRef}>
          <YoutubeVideo videoId={videoId} />
        </div>
        <br />
        <h2 className="display-4 mb-4">
          ¡Descubre nuestro equipamiento fitness!
        </h2>

        <BuscadorRopaDeportiva
          productos={productosDeEquipamiento}
          onSearch={handleSearch}
        />

        <div className="row" ref={cardsSectionRef}>
          {productosFiltrados.length === 0 ? (
            // Mostrar todos los productos si no hay resultados de búsqueda
            productosDeEquipamiento.map((producto) => (
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


