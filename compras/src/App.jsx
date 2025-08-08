import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useCart } from "./context/CartContext";

export default function App() {
  const { cart } = useCart();
  const itemsCount = cart.reduce((acc, it) => acc + it.qty, 0);

  return (
    <>
      {/* Navbar responsive */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
          <img
            src="/src/assets/logo.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
    <span style={{ fontSize: "1.5rem" }}>
    <span style={{ color: "deeppink" }}>ONLINE</span>{" "}
    <span style={{ color: "navy" }}>SHOP</span>
  </span>
        </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
            </ul>

            {/* Botón que abre el Offcanvas del carrito */}
            <button
              className="btn btn-outline-primary position-relative"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffcanvas"
              aria-controls="cartOffcanvas"
              aria-label="Abrir carrito"
            >
              Carrito
              {itemsCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {itemsCount}
                  <span className="visually-hidden">items en el carrito</span>
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container my-4">
        <div className="row g-4">
          {/* Productos */}
          <section className="col-12">
            <h2 className="h4 mb-3">Productos</h2>
            <ProductList />
          </section>
        </div>
      </div>

      {/* Offcanvas: Carrito */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartOffcanvas"
        aria-labelledby="cartOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartOffcanvasLabel">Tu Carrito</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-3">
          <Cart />
        </div>
      </div>

      {/* FAB móvil */}
      <button
        className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-3 p-0 d-lg-none shadow z-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#cartOffcanvas"
        aria-controls="cartOffcanvas"
        aria-label="Abrir carrito"
        style={{ width: 64, height: 64 }}
      >
        <span className="position-relative d-inline-flex align-items-center justify-content-center w-100 h-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="40"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 1a1 1 0 0 1 1-1h1.11a1 1 0 0 1 .98.804L3.89 3H14a1 1 0 0 1 .98 1.196l-1 5A1 1 0 0 1 13 10H5a1 1 0 0 1-.98-.804L3.11 4H1a1 1 0 0 1-1-1zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 11 12z"/>
          </svg>

          {itemsCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {itemsCount}
              <span className="visually-hidden">items en el carrito</span>
            </span>
          )}
        </span>
      </button>

      {/* Footer */}
      <footer className="py-4 mt-auto border-top">
        <div className="container">
          <p className="mb-0 text-center text-muted">© {new Date().getFullYear()} ONLINE STORE</p>
        </div>
      </footer>
    </>
  );
}
