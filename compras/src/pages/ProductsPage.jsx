import { useEffect, useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState(""); // 🔎 consulta del buscador
  const { addToCart } = useCart();

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Error al cargar productos");
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

  // Filtrado por nombre
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return products;
    return products.filter(p => p.title.toLowerCase().includes(term));
  }, [products, q]);

  const onSubmit = (e) => {
    e.preventDefault(); // opcional si en el futuro pegas analytics
  };

  if (loading) return <div className="container py-5">Cargando productos…</div>;
  if (err) return <div className="container py-5 text-danger">{err}</div>;

  return (
    <>
      {/* Barra superior oscura con buscador */}
      <div className="bg-dark text-white py-2">
        <div className="container">
          <div className="d-flex align-items-center gap-3">
            {/* “Logo / menú” de ejemplo a la izquierda (opcional) */}
            <div className="d-flex align-items-center gap-2">
              
            </div>

            {/* Buscador grande */}
            <form className="flex-grow-1" onSubmit={onSubmit} role="search" aria-label="Buscar productos">
              <div className="input-group input-group-lg">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Buscar productos"
                  aria-label="Buscar productos"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
                <button className="btn btn-secondary" type="submit" aria-label="Buscar">
                  {/* ícono lupa (SVG inline para no depender de bootstrap-icons) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>
                  </svg>
                </button>
              </div>
            </form>

            {/* Acciones a la derecha (opcionales) */}
            <div className="d-none d-md-flex align-items-center gap-3">
              <a href="#login" className="link-light text-decoration-none">¡Hola! <span className="fw-semibold">Inicia sesión</span></a>
              <a
                href="#carrito"
                className="link-light text-decoration-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#cartOffcanvas"
              >
                {/* ícono carrito simple */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1a1 1 0 0 1 1-1h1.11a1 1 0 0 1 .98.804L3.89 3H14a1 1 0 0 1 .98 1.196l-1 5A1 1 0 0 1 13 10H5a1 1 0 0 1-.98-.804L3.11 4H1a1 1 0 0 1-1-1zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 11 12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="h4 mb-0">Productos</h1>
          <small className="text-muted">
            {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
            {q ? ` para “${q}”` : ""}
          </small>
        </div>

        {filtered.length === 0 ? (
          <div className="alert alert-light border d-flex justify-content-between align-items-center">
            <span>No encontramos productos para “{q}”.</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => setQ("")}>
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3">
            {filtered.map((p) => (
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
                      <button className="btn btn-sm btn-primary" onClick={() => addToCart(p)}>
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
