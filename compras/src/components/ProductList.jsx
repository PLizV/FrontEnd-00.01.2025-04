import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductList() {
const [products, setProducts] = useState([]);
const [loading, setLoading]   = useState(true);
const [error, setError]       = useState(null);
const { addToCart } = useCart();

useEffect(() => {
    let alive = true;
    (async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Error al cargar productos");
        const data = await res.json();
        if (alive) {
        setProducts(
            data.map((p) => ({
            id: Number(p.id),
            title: p.title,
            price: Number(p.price),
            image: p.image,
            }))
        );
        }
    } catch (e) {
        if (alive) setError(e.message);
    } finally {
        if (alive) setLoading(false);
    }
    })();
    return () => { alive = false; };
}, []);

if (loading) {
return (
    <div className="d-flex align-items-center gap-2">
        <div className="spinner-border" role="status" aria-hidden="true"></div>
        <span>Cargando productos…</span>
    </div>
    );
}

if (error) {
    return <div className="alert alert-danger">{error}</div>;
}

return (
    // row-cols hace la grilla responsiva: 1 col en xs, 2 en sm, 3 en md, 4 en lg+
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
    {products.map((p) => (
        <div className="col" key={p.id}>
        <div className="card h-100">
            <img src={p.image} className="card-img-top object-fit-contain p-3" alt={p.title} style={{ height: 200 }} />
            <div className="card-body d-flex flex-column">
            <h5 className="card-title fs-6">{p.title}</h5>
            <p className="card-text fw-semibold">S/ {p.price.toFixed(2)}</p>
            <div className="mt-auto">
                <button
                className="btn btn-primary w-100"
                onClick={() => addToCart(p)}
                >
                Agregar al carrito
                </button>
            </div>
            </div>
        </div>
        </div>
    ))}
    </div>
);
}
