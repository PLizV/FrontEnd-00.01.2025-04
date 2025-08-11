import { useCart } from "../context/CartContext";

export default function FabCart() {
  const { cart } = useCart();
  const itemsCount = cart.reduce((acc, it) => acc + it.qty, 0);

  return (
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
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" fill="currentColor">
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
  );
}

