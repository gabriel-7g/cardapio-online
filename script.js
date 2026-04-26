const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartCount = document.getElementById("cart-count");
const modalCart = document.getElementById("modalCart");
const closeModalBtn = document.getElementById("close-modal-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const cartItemsContainer = document.getElementById("cart-items");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

cartBtn.addEventListener("click", () => {
    modalCart.style.display = "flex";
});

