import { useCart } from "../context/CartContext";

export default function CartOffcanvas() {
  const {
    cart,
    addToCart,
    removeFromCart,
    removeLine,
    clearCart,
    getTotal,
  } = useCart();

  return (
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
        {cart.length === 0 ? (
          <p className="text-muted">Tu carrito está vacío.</p>
        ) : (
          <ul className="list-group list-group-flush">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between gap-2"
              >
                <div className="d-flex align-items-center gap-3 me-auto">
                  <img
                    src={item.image || "https://via.placeholder.com/56?text=IMG"}
                    alt={item.title}
                    style={{ width: 56, height: 56, objectFit: "cover" }}
                    className="rounded"
                  />
                  <div>
                    <div className="fw-semibold">{item.title}</div>
                    <small className="text-muted">
                      S/ {item.price.toFixed(2)} × {item.qty}
                    </small>
                  </div>
                </div>

                <div className="btn-group align-items-center">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    title="Quitar 1"
                    onClick={() => removeFromCart(item.id)}
                    disabled={item.qty <= 1}
                  >
                    −
                  </button>
                  <span className="px-2 fw-bold">{item.qty}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    title="Agregar 1"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    title="Eliminar producto"
                    onClick={() => removeLine(item.id)}
                  >
                    x
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top">
          <strong>Total: S/ {getTotal().toFixed(2)}</strong>
          <button className="btn btn-warning btn-sm" onClick={clearCart}>
            Vaciar
          </button>
        </div>
      </div>
    </div>
  );
}

