import React, { useState, useEffect } from 'react';

export default function Explore() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('inspiration');
  const [activeTab, setActiveTab] = useState('todos');
  const [savedPins, setSavedPins] = useState(() => {
    // Cargar pines desde localStorage al inicio
    const stored = localStorage.getItem('savedPins');
    return stored ? JSON.parse(stored) : [];
  });

  // Buscar imágenes desde Unsplash
  const fetchImages = async (category = 'inspiration') => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${category}&client_id=zWiE21WmlvibCbYZk7Ac74dMkKmkDC5ZKxrOH8UOoLk`
    );
    const data = await res.json();
    setImages(data.results || []);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages(query);
  };

  const handleSavePin = (pin) => {
    if (!savedPins.some((p) => p.id === pin.id)) {
      const updated = [...savedPins, pin];
      setSavedPins(updated);
      localStorage.setItem('savedPins', JSON.stringify(updated));
    }
  };

  const isPinSaved = (id) => savedPins.some((p) => p.id === id);

  return (
    <div className="container py-4">
      {/* === Buscador === */}
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

      {/* === Tabs de navegación === */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            Todos
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'guardados' ? 'active' : ''}`}
            onClick={() => setActiveTab('guardados')}
          >
            Mis Pines guardados
          </button>
        </li>
      </ul>

      {/* === Contenido === */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {(activeTab === 'todos' ? images : savedPins).map((img) => (
<div className="col" key={img.id}>
  <div className="position-relative">
    <img
      src={img.urls.small}
      alt={img.alt_description}
      className="img-fluid rounded"
    />

    <div className="position-absolute top-0 end-0 m-2 d-none hover-show">
      <button
        className="btn btn-danger btn-sm"
        onClick={() => handleSavePin(img)}
        disabled={isPinSaved(img.id)}
        title={isPinSaved(img.id) ? 'Ya guardado' : 'Guardar pin'}
      >
        {isPinSaved(img.id) ? '✓ Guardado' : 'Guardar'}
      </button>
    </div>
  </div>
</div>
        ))}
      </div>

      {/* === Mensaje vacío === */}
      {activeTab === 'guardados' && savedPins.length === 0 && (
        <div className="text-center text-muted mt-4">
          <p>No tienes pines guardados aún.</p>
        </div>
      )}
    </div>
  );
}


