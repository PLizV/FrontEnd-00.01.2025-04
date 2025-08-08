import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loadCart, saveCart } from "../utils/storage";

const CartContext = createContext();

export function CartProvider({ children }) {
const [cart, setCart] = useState(() => loadCart());

  // persistencia en LocalStorage ante cualquier cambio
useEffect(() => {
    saveCart(cart);
}, [cart]);
function addToCart(product) {
    // validaciones mínimas
    if (!product || typeof product.id !== "number") return;
    setCart((prev) => {
    const idx = prev.findIndex((p) => p.id === product.id);
    if (idx !== -1) {
        // si ya existe, incrementa cantidad
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
    }
      // estándar: qty = 1
    return [...prev, { ...product, qty: 1 }];
    });
}

function removeFromCart(id) {
    if (typeof id !== "number") return;
    setCart((prev) => prev.filter((item) => item.id === id ? item.qty > 1 ? ((item.qty--), true) : false : true)
      .map((item) => ({ ...item })) // normaliza referencia tras el -- (truco rápido)
    );
    // Nota: el truco anterior reduce qty si >1; si ==1 lo elimina.
    // Si prefieres SIEMPRE eliminar, usa: setCart(prev => prev.filter(i => i.id !== id));
}

function removeLine(id) {
    // eliminar la línea completa, útil para botón "x"
    if (typeof id !== "number") return;
    setCart((prev) => prev.filter((item) => item.id !== id));
}

function clearCart() {
    setCart([]);
}

const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cart]
);

const value = {
    cart,
    addToCart,
    removeFromCart, // reduce cantidad o elimina si llega a 0
    removeLine,     // elimina la línea completa
    clearCart,
    getTotal: () => total,
};

return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
const ctx = useContext(CartContext);
if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
return ctx;
}
