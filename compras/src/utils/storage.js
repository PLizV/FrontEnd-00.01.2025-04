const KEY = "MY_SHOP_CART_V1";

export function loadCart() {
try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);

    // Validación mínima de integridad
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
(it) =>
        it &&
        typeof it.id === "number" &&
        typeof it.title === "string" &&
        typeof it.price === "number" &&
        typeof it.qty === "number" &&
        it.qty > 0
    );
} catch {
    return [];
}
}

export function saveCart(cart) {
try {
    localStorage.setItem(KEY, JSON.stringify(cart));
} catch {
    // noop
}
}