
  import React, { useState } from "react";
  import YoutubeVideo from "../components/YoutubeVideo";
  import CustomCard from "../components/CustomCard";
  import BuscadorRopaDeportiva from "../components/BuscadorRopaDeportiva";
  import SideMenu from "../components/SideMenu";
import { useRef } from "react";
  const Calzado = () => {
   
  const productosDeRopaDeportiva = [
    {
      id: 1,
      imageSrc: "img/z1.jpg",
      title: "Zapatillas para Correr",
      description:
        "Zapatillas diseñadas para brindar comodidad y apoyo en cada paso.",
      price: "89.99 Bs.",
    },
    {
      id: 2,
      imageSrc: "img/z2.jpg",
      title: "Zapatillas de Trail Running",
      description:
        "Zapatillas resistentes para aventuras off-road y terrenos desafiantes.",
      price: "99.99 Bs.",
    },
    {
      id: 3,
      imageSrc: "img/z3.jpg",
      title: "Zapatillas de Entrenamiento Cruzado",
      description:
        "Zapatillas versátiles ideales para una variedad de entrenamientos.",
      price: "79.99 Bs.",
    },
    {
      id: 4,
      imageSrc: "img/z4.jpg",
      title: "Zapatillas de Baloncesto",
      description:
        "Zapatillas diseñadas para ofrecer un rendimiento óptimo en la cancha.",
      price: "129.99 Bs.",
    },
    {
      id: 5,
      imageSrc: "img/z5.jpg",
      title: "Zapatillas de Skate",
      description:
        "Zapatillas con suela antideslizante para una experiencia óptima de skate.",
      price: "69.99 Bs.",
    },
    {
      id: 6,
      imageSrc: "img/z6.jpg",
      title: "Zapatillas de Moda Deportiva",
      description:
        "Zapatillas elegantes y cómodas para destacar tu estilo en cualquier ocasión.",
      price: "59.99 Bs.",
    },
  ];
  
    const videoId = "aVs2Y_mNMTc";
    const videoSectionRef = useRef(null);
    const cardsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    const [productosFiltrados, setProductosFiltrados] = useState(productosDeRopaDeportiva);
  
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

        <h2>Calzado deportivo</h2>
        <div className="d-flex justify-content-center"  ref={videoSectionRef}>
          <YoutubeVideo videoId={videoId} />
        </div>
        <br />
        <h2 className="display-4 mb-4">
          ¡Deslúmbrate con nuestra calzado Deportivo!
        </h2>

        <BuscadorRopaDeportiva
          productos={productosDeRopaDeportiva}
          onSearch={handleSearch}
        />

        <div className="row"  ref={cardsSectionRef}>
          {productosFiltrados.length === 0 ? (
            // Mostrar todos los productos si no hay resultados de búsqueda
            productosDeRopaDeportiva.map((producto) => (
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
  
  export default Calzado;
  