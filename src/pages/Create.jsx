import React from 'react';

export default function Create() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Crear Pin</h2>
      <div className="row">
        <div className="col-md-5 mb-4">
          <div className="border rounded d-flex justify-content-center align-items-center flex-column" style={{ height: '400px', backgroundColor: '#f0f0f0' }}>
            <div className="mb-3 text-center">
              <i className="bi bi-upload" style={{ fontSize: '2rem' }}></i>
            </div>
            <p className="text-center">Elige un archivo o arrástralo y suéltalo aquí</p>
            <small className="text-muted text-center px-3">
              Se recomienda usar archivos .jpg de alta calidad que tengan menos de 20 MB o archivos .mp4 que tengan menos de 200 MB.
            </small>
          </div>
        </div>
        <div className="col-md-7">
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input type="text" className="form-control" placeholder="Añade un título" />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea className="form-control" rows="3" placeholder="Añade una descripción detallada"></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Enlace</label>
            <input type="text" className="form-control" placeholder="Añade un enlace" />
          </div>
          <div className="mb-3">
            <label className="form-label">Tablero</label>
            <select className="form-select">
              <option>Selecciona un tablero</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}