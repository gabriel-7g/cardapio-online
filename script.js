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

// Abrir o modal do carrinho
cartBtn.addEventListener("click", () => {
    modalCart.style.display = "flex";
});
// Fechar o modal do carrinho
closeModalBtn.addEventListener("click", () => {
    modalCart.style.display = "none";
})
// Fechar o modal do carrinho clicando fora do conteúdo
modalCart.addEventListener("click", (e) => {
    if (e.target === modalCart) {
        modalCart.style.display = "none";
    }
});

// Adicionar itens ao carrinho
menu.addEventListener("click", (e) => {
    let parentButton = e.target.closest(".add-to-cart-btn");
    if (parentButton) {
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));
        addToCart(name, price);
    }
})

// Função para adicionar itens ao carrinho
function addToCart(name, price) {
    const item = document.createElement("div")
}