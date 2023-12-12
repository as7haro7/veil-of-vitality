import React from 'react';
import BrandSection from '../components/BrandSection';
import CustomCard from '../components/CustomCard';

export const Adidas = () => {
  const productosAdidas = [
    {
      id: 1,
      imageSrc: 'img/adi3.webp',
      title: 'Producto Adidas 1',
      description: 'Descripción del producto Adidas 1.',
      price: '$39.99',
    },
    {
      id: 2,
      imageSrc: 'img/adi4.avif',
      title: 'Producto Adidas 2',
      description: 'Descripción del producto Adidas 2.',
      price: '$49.99',
    },
    {
      id: 3,
      imageSrc: 'img/adi7.avif',
      title: 'Producto Adidas 2',
      description: 'Descripción del producto Adidas 2.',
      price: '$49.99',
    },
  ];
  return (
    <div className="container">
      <h1 className="display-3 text-center mb-5">Adidas</h1>

      {/* Primera sección */}
      <BrandSection
        brandName="Adidas"
        imageSrc="img/adi6.avif"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageOnLeft={true}
      />
      <p className="lead text-center">
        Descubre la innovación y el estilo que define a Adidas.
        <a href="#adidas-section-2"> Sigue leyendo...</a>
      </p>

      {/* Segunda sección */}
      <BrandSection
        brandName="Adidas"
        imageSrc="img/adi2.avif"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageOnLeft={false}
      />
      <p className="lead text-center">
        Explora la calidad y rendimiento que ofrece Adidas en cada producto.
      </p>

      <div className="row">
      {productosAdidas.map((producto) => (
        <CustomCard
          key={producto.id}
          imageSrc={producto.imageSrc}
          title={producto.title}
          description={producto.description}
          price={producto.price}
        />
      ))}

      <div className="col-12 text-center mt-4">
        <a  className="btn btn-primary btn-lg">
          Ver más productos Adidas
        </a>
      </div>
    </div>
    </div>
  );
};

