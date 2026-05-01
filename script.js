let cart = []
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
const cartTotal = document.getElementById("cart-total")

// Abrir o modal do carrinho
cartBtn.addEventListener("click", () => {
    updateCartModal();
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
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1
    }else{
        cart.push({
            name,
            price,
            quantity: 1
        })
    }
    updateCartModal()
}

// Atualizar o carrinho
function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0
    cart.forEach(item =>{
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

        cartItemElement.innerHTML = `
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-bold">${item.name}<p>
                    <p>Quantidade: ${item.quantity}<p>
                    <p class="font-medium mt-2">${item.price.toFixed(2)}<p>
                <div>
                <button>
                    Remover
               <button>
            <div>
        `

        total += item.price * item.quantity;

        cartItemsContainer.appendChild(cartItemElement)
    })

    cartTotal.textContent = total.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })

}