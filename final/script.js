const products = [
    {
        name: "Heart Keychain",
        image: "images/heart.jpg",
        price: 6.99,
        description: "A cute heart-shaped keychain to show your love."
    },
    {
        name: "Star Keychain",
        image: "images/star.jpg",
        price: 8.99,
        description: "A shiny star keychain to brighten your day."
    },
    {
        name: "Mushroom Keychain",
        image: "images/mushroom.jpg",
        price: 10.99,
        description: "A whimsical mushroom keychain for nature lovers."
    },
    {
        name: "Flower Keychain",
        image: "images/flower.jpg",
        price: 7.99,
        description: "A beautiful flower keychain to add a touch of nature."
    }
];

let cart = 0;

// Display products
function displayProducts(){
    const container = document.getElementById("product-container");
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <button class="btn">View</button>
        `;
        
        const btn = productCard.querySelector(".btn");
        btn.addEventListener("click", () => {
            featuredProduct(product);
        });

        container.appendChild(productCard);
    });
}

// Update featured product
function featuredProduct(product){
    document.getElementById("preview-image").src = product.image;
    document.getElementById("preview-image").alt = product.name;
    document.getElementById("preview-name").textContent = product.name;
    document.getElementById("preview-description").textContent = product.description;
    document.getElementById("preview-price").textContent = `$${product.price.toFixed(2)}`;
}

// Add item to cart
function addToCart(){
    const cartBtn = document.getElementById("cart-btn");
    cartBtn.addEventListener("click", () => {
        cart++;
        document.getElementById("cart-count").textContent = cart;
    });
}

// Load order dropdown
function loadOptions(){
    const dropdown = document.getElementById("design");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        dropdown.appendChild(option);
    });
}

// Validate form
function validateForm(){
    const form = document.getElementById("order-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const design = document.getElementById("design").value;

        if (name === "" || email === "" || design === "") {
            message.textContent = "Please fill out all required fields.";
        }
        else {
            message.textContent = "Your order request has been submitted!";
            form.reset();
        }
    });
}

// Start functions
displayProducts();
featuredProduct(products[0]);
addToCart();
loadOptions();
validateForm();