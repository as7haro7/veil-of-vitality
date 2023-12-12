import React from 'react'
import BrandSection from '../components/BrandSection'
export const Nike = () => {
  return (
    <>
 <div className="container">
      <h1 className="display-3 text-center mb-5">Nike</h1>

      {/* Primera sección */}
      <BrandSection
        brandName="Nike"
        imageSrc="img/nik1.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageOnLeft={true}
      />
      <p className="lead text-center">
        Descubre la innovación y el estilo que define a Nike.
        <a href="#nike-section-2"> Sigue leyendo...</a>
      </p>

      {/* Segunda sección */}
      <BrandSection
        brandName="Nike"
        imageSrc="img/nik2.webp"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageOnLeft={false}
      />
      <p className="lead text-center">
        Explora la calidad y rendimiento que ofrece Nike en cada producto.
        <a href="#nike-section-3"> Sigue leyendo...</a>
      </p>

      {/* Tercera sección */}
      <BrandSection
        brandName="Nike"
        imageSrc="img/nik3.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageOnLeft={true}
      />
      <p className="lead text-center">
        Sumérgete en el legado y la cultura que rodea a la marca Nike.
      </p>
    </div>

    </>
  )
}
