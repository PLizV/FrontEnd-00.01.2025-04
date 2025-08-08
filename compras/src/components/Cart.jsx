import { useCart } from "../context/CartContext";

export default function Cart() {
const { cart, addToCart, removeFromCart, removeLine, clearCart, getTotal } = useCart();

return (
    <div className="card">
    <div className="card-header">
        <h3 className="h5 mb-0">Carrito</h3>
    </div>

    <div className="card-body">
        {cart.length === 0 ? (
        <p className="text-muted mb-0">Tu carrito está vacío.</p>
        ) : (
        <ul className="list-group list-group-flush">
            {cart.map((item) => (
            <li
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between gap-2"
            >
                {/* Imagen + info */}
                <div className="d-flex align-items-center gap-3 me-auto">
                <img
                    src={item.image || "https://via.placeholder.com/56?text=IMG"}
                    alt={item.title}
                    className="rounded border bg-white"
                    style={{ width: 56, height: 56, objectFit: "contain" }}
                />
                <div>
                    <div className="fw-semibold">{item.title}</div>
                    <small className="text-muted d-block">
                    S/ {item.price.toFixed(2)} × {item.qty}
                    </small>
                    <small className="text-muted">
                      Subtotal: S/ {(item.price * item.qty).toFixed(2)}
                    </small>
                </div>
                </div>

                {/* Controles */}
                <div className="btn-group align-items-center">
                  {/* Restar */}
                <button
                    className="btn btn-outline-secondary btn-sm"
                    title="Quitar 1"
                    onClick={() => removeFromCart(item.id)}
                    disabled={item.qty <= 1}
                >
                    −
                </button>

                  {/* Cantidad */}
                <span className="px-2 fw-bold">{item.qty}</span>

                  {/* Sumar */}
                <button
                    className="btn btn-outline-secondary btn-sm"
                    title="Agregar 1"
                    onClick={() => addToCart(item)}
                >
                    +
                </button>

                  {/* Eliminar línea */}
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
    </div>

    <div className="card-footer d-flex align-items-center justify-content-between">
        <strong>Total: S/ {getTotal().toFixed(2)}</strong>
        <button className="btn btn-warning btn-sm" onClick={clearCart}>
        Vaciar
        </button>
    </div>
    </div>
);
}
