import React, { useState } from 'react';

const BuscadorRopaDeportiva = ({ productos, onSearch }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = () => {
    // Filtrar productos según la búsqueda
    const resultados = productos.filter(producto =>
      producto.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    // Llamar a la función de búsqueda del padre con los resultados
    onSearch(resultados);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar ropa deportiva..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default BuscadorRopaDeportiva;
