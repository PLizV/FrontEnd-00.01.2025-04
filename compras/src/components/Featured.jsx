// src/components/Featured.jsx
import { useEffect, useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Featured() {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("No se pudo cargar destacados");
        const data = await res.json();
        if (alive) setProducts(data);
      } catch (e) {
        setErr(e.message || "Ocurrió un error");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  // elige 8 destacados (puedes cambiar el criterio)
  const featured = useMemo(() => products.slice(0, 8), [products]);

  return (
    <section id="productos" className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 m-0">Destacados</h2>
        <a className="text-decoration-none" href="/productos">Ver más</a>
      </div>

      {loading && (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="col" key={i}>
              <div className="card h-100 border-0">
                <div className="placeholder-glow" style={{ height: 180 }}>
                  <span className="placeholder w-100 h-100 d-block" />
                </div>
                <div className="card-body">
                  <h6 className="card-title placeholder-glow">
                    <span className="placeholder col-10"></span>
                  </h6>
                  <div className="d-flex justify-content-between">
                    <span className="placeholder col-4"></span>
                    <span className="btn btn-sm btn-primary disabled placeholder col-4"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {err && !loading && (
        <div className="alert alert-danger">{err}</div>
      )}

      {!loading && !err && (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3">
          {featured.map((p) => (
            <div className="col" key={p.id}>
              <div className="card h-100 border-0 card-shadow">
                <img
                  src={p.image}
                  alt={p.title}
                  className="card-img-top"
                  style={{ objectFit: "contain", height: 180, padding: 16 }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{p.title}</h6>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <strong>S/ {p.price.toFixed(2)}</strong>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => addToCart(p)}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
