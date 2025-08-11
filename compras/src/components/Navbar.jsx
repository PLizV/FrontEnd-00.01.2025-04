// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const itemsCount = cart.reduce((acc, it) => acc + it.qty, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">ONLINE SHOP</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
          </ul>

          <button className="btn btn-outline-primary position-relative"
            data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">
            Carrito
            {itemsCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {itemsCount}<span className="visually-hidden">items</span>
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

