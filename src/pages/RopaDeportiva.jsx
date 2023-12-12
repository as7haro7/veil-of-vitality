import React from "react";
import CustomCard from "../components/CustomCard";
import YoutubeVideo from "../components/YoutubeVideo";
import SideMenu from "../components/SideMenu";
import { useRef } from "react";
const RopaDeportiva = () => {
  const productosDeRopaDeportiva = [
    {
      id: 1,
      imageSrc: "img/rd1.jpg",
      title: "Camiseta Deportiva",
      description: "Camiseta transpirable para entrenamientos intensos.",
      price: "29.99 Bs.",
    },
    {
      id: 2,
      imageSrc: "img/rd2.jpg",
      title: "Campera Running",
      description: "Leggings ajustados para correr con comodidad.",
      price: "39.99 Bs.",
    },
    {
      id: 3,
      imageSrc: "img/rd3.jpg",
      title: "Leggins",
      description: "Pantalones suaves y elásticos perfectos para sesiones de entrenamiento.",
      price: "79.99 Bs.",
    },
    {
      id: 4,
      imageSrc: "img/rd4.jpg",
      title: "Campera Blanca",
      description: "Chaqueta resistente al viento ideal para actividades al aire libre.",
      price: "24.99 Bs.",
    },
    {
      id: 5,
      imageSrc: "img/rd5.jpg",
      title: "Chaqueta Deportiva",
      description: "Chaqueta resistente al viento ideal para actividades al aire libre.",
      price: "59.99 Bs.",
    },
    {
      id: 6,
      imageSrc: "img/rd6.jpg",
      title: "Conjunto de Yoga",
      description: "Conjunto cómodo para prácticas de yoga.",
      price: "34.99 Bs.",
    },
    {
      id: 7,
      imageSrc: "img/rd7.jpg",
      title: "Pantaloneta Deportiva",
      description: "Shorts con soporte ideal para actividades de alto impacto.",
      price: "32.99 Bs.",
    },
    {
      id: 8,
      imageSrc: "img/rd8.jpg",
      title: "Conjunto Deportivo",
      description: "Conjunto completo para tus entrenamientos.",
      price: "14.99 Bs.",
    },
    {
      id: 9,
      imageSrc: "img/rd9.jpg",
      title: "Pantaloneta Ergonomica",
      description: "Pantaloneta ergonómica para ofrecer comodidad y rendimiento.",
      price: "9.99 Bs.",
    },
  ];
  
  

  const videoId = "PlXYNNMNHzE";
  const videoSectionRef = useRef(null);
  const cardsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // return (
  //   <div>
  //     <div className="container">
  //       <SideMenu 
  //         videoSectionRef={videoSectionRef}
  //         cardsSectionRef={cardsSectionRef}
  //         contactSectionRef={contactSectionRef}
  //       />
        
        
  //     </div>
  //   </div >
  // );

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
      {/* <div className="col-md-auto px-0 d-none d-md-block position-fixed " style={{ maxWidth: '130px', borderRight: '1px solid #ddd' }}> */}
      <div className="col-md-3 d-none d-md-block px-0" style={{ maxWidth: '130px', borderRight: '1px solid #ddd' }}>
      <SideMenu
        videoSectionRef={videoSectionRef}
        cardsSectionRef={cardsSectionRef}
        contactSectionRef={contactSectionRef}
      />
    </div>
    <main className="col ps-2 pt-2">
        <h2 className="text-center">Ropa Deportiva</h2>
        <p className="lead">
          Descubre nuestra exclusiva colección de ropa deportiva, diseñada para
          brindarte comodidad y estilo mientras alcanzas tus metas fitness.
          Desde camisetas transpirables hasta leggings de alto rendimiento y
          zapatillas versátiles, nuestra selección fusiona moda y funcionalidad.
          Viste con confianza y alcanza tus objetivos con la mejor equipación
          deportiva. ¡Encuentra tu inspiración para moverte con estilo!
        </p>
        <div className="d-flex justify-content-center" ref={videoSectionRef}>
          <YoutubeVideo videoId={videoId} />
        </div>
        <br />{" "}
        <h2 className="display-4 mb-4">
          ¡Deslúmbrate con nuestra Ropa Deportiva!
        </h2>
        <div className="row" ref={cardsSectionRef}>
          {productosDeRopaDeportiva.map((producto) => (
            <CustomCard
              key={producto.id}
              imageSrc={producto.imageSrc}
              title={producto.title}
              description={producto.description}
              price={producto.price}
            />
          ))}
        </div>
        <div ref={contactSectionRef}>
          
        </div>
        </main>
      </div>
    </div>
  );
};

export default RopaDeportiva;
