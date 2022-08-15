import httpService from "./httpService";
import config from "../config.json";

export const CART_LS_KEY = "cart";

const getProductsFromLS = () => {
    const products = localStorage.getItem(CART_LS_KEY);
    return products ? JSON.parse(products) : [];
}

export async function getCart(userId) {
    if (userId) {
        return httpService.get(`${config.apiUrl}/cart/${userId}`).then(res => res.data);
    }
    else {
        return Promise.resolve(getProductsFromLS());
    }
}

export async function addToCart(userId, productId) {
    if (userId) {
        return httpService.patch(`${config.apiUrl}/cart/${userId}/add-to-cart`, {productId}).then(res => res.data);
    }
    else {
        const products = getProductsFromLS();
        let product = products.find(p => p.id === productId);
        if (product) {
            product.count++;
        }
        else {
            product = { id: productId, count: 1 };
            products.push(product);
        }
        localStorage.setItem(CART_LS_KEY, JSON.stringify(products));
        return Promise.resolve(getProductsFromLS());
    }
}

export async function clearCart(userId) {
    if (userId) {
        return httpService.patch(`${config.apiUrl}/cart/${userId}/clear`).then(res => res.data);
    }
    else {
        localStorage.setItem(CART_LS_KEY, JSON.stringify([]));
        return Promise.resolve(getProductsFromLS());
    }
}

export async function removeFromCart(userId, productId) {
    if (userId) {
        return httpService.patch(`${config.apiUrl}/cart/${userId}/remove-from-cart`, {productId}).then(res => res.data);
    }
    else {
        const products = getProductsFromLS();
        const product = products.find(p => p.id === productId);
        if (product?.count > 1) {
            product.count--;
        }
        localStorage.setItem(CART_LS_KEY, JSON.stringify(products));
        return Promise.resolve(getProductsFromLS());
    }
}

export async function removeAllFromCart(userId, productId) {
    if (userId) {
        return httpService.patch(`${config.apiUrl}/cart/${userId}/remove-all-from-cart`, {productId}).then(res => res.data);
    }
    else {
        const products = getProductsFromLS();
        const idx = products.findIndex(p => p.id === productId);
        if (idx > -1) {
            products.splice(idx, 1);
        }
        localStorage.setItem(CART_LS_KEY, JSON.stringify(products));
        return Promise.resolve(getProductsFromLS());
    }
}

const service = {
    getCart,
    addToCart,
    clearCart,
    removeFromCart,
    removeAllFromCart
};

export default service;
