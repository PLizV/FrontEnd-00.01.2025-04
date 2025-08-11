// src/components/Categories.jsx
import { Link } from "react-router-dom";

const cats = [
  { name: "Tecnología", file: "tecnologia.jpg" },
  { name: "Moda",       file: "moda.jpg" },
  { name: "Hogar",      file: "hogar.jpg" },
  { name: "Belleza",    file: "belleza.jpg" },
];

export default function Categories() {
  return (
    <section className="py-4">
      <div className="d-flex justify-content-between align-items-end mb-3">
        <h2 className="h4 m-0">Categorías</h2>
        <Link to="/productos" className="text-decoration-none">Ver todas</Link>
      </div>

      <div className="row row-cols-2 row-cols-md-4 g-3">
        {cats.map((c) => {
          // Al estar en public/img, se sirven en /img/<file>
          const src = `/img/${c.file}`;
          return (
            <div className="col" key={c.name}>
              <Link
                to={`/productos?q=${encodeURIComponent(c.name)}`}
                className="text-decoration-none"
              >
                <div className="card h-100 border-0 card-shadow">
                  <img
                    src={src}
                    alt={c.name}
                    className="card-img-top"
                    loading="lazy"
                    style={{ objectFit: "cover", height: 150 }}
                    onError={(e) => {
                      // fallback simple por si falta el archivo
                      e.currentTarget.src = "/img/placeholder.jpg";
                    }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title text-dark">{c.name}</h6>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
