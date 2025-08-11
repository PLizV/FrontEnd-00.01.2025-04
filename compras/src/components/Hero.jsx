import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="hero py-5 position-relative text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/hero-banner.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container position-relative">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <span className="badge badge-soft mb-3 px-3 py-2">
              Nuevo · Envios 24h
            </span>
            <h1 className="display-5 fw-bold">
              Tu destino favorito para{" "}
              <span className="brand-gradient">compras online</span>
            </h1>
            <p className="lead mt-3">
              Encuentra miles de productos, ofertas exclusivas y una experiencia de compra fluida.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Link to="/productos" className="btn btn-cta btn-lg">Explorar ahora</Link>
              <a href="#newsletter" className="btn btn-outline-light btn-lg">
                Recibir ofertas
              </a>
            </div>
            <div className="d-flex gap-4 mt-4">
              <small>✔ Pagos seguros</small>
              <small>✔ Devoluciones fáciles</small>
              <small>✔ Soporte 24/7</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
