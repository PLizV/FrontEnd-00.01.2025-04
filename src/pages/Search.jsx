import React, { useEffect, useState } from 'react';

export default function Search() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('inspiración');

  const fetchImages = async (q) => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${q}&client_id=zWiE21WmlvibCbYZk7Ac74dMkKmkDC5ZKxrOH8UOoLk`
    );
    const data = await res.json();
    setImages(data.results || []);
  };

  useEffect(() => {
    fetchImages(query);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages(query);
  };

  return (
    <div className="container py-4">
      {/* Buscador */}
      <form onSubmit={handleSearch} className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Buscar inspiración..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-danger">Buscar</button>
      </form>

      {/* Título */}
      <div className="text-center mb-4">
        <h6>{new Date().toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' })}</h6>
        <h2 className="fw-bold">Mantén la inspiración</h2>
      </div>

      {/* Grid de imágenes */}
      <div className="row">
        {images.map((img) => (
          <div className="col-md-6 col-lg-6 mb-4" key={img.id}>
            <div className="card shadow-sm rounded overflow-hidden border-0">
              <img src={img.urls.small} className="card-img-top" alt={img.alt_description} />
              <div className="card-body">
                <p className="card-text text-muted mb-0" style={{ fontSize: '0.85rem' }}>
                  {img.alt_description?.split(' ').slice(0, 2).join(' ') || 'Inspiración visual'}
                </p>
                <h5 className="card-title fw-bold">
                  {img.alt_description || 'Imagen destacada'}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
