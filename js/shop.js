const products = [
  {
    name: "Admis blue tee",
    price: 73.9,
    currency: "DT",
    image: "img/t shirts/Admis blue tee.png",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: "S",
  },
  {
    name: "Admis pink tee",
    price: 73.9,
    currency: "TND",
    image: "img/t shirts/Admis pink tee.png",
    type: "sale",
    category: "tshirts",
    availability: "inStock",
    size: "L",
  },
  {
    name: "asrar alghaz tee black",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/asrar alghaz tee black.png",
    type: "sale",
    category: "tshirts",
    availability: "outOfStock",
    size: "S",
  },
  {
    name: "asrar alghaz tee white",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/asrar alghaz tee white.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "Vintage 23 beygurl tee",
    price: 92.9,
    currency: "DT",
    image: "img/t shirts/vintage 23 beygurl tee.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "vintage 23 beyboi tee",
    price: 92.9,
    currency: "DT",
    image: "img/t shirts/vintage 23 beyboi tee.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "dream astronaut club tee yellow",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/dream astronaut club tee yellow.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "asrar",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/asrar.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "dream astronaut club tee pink",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/dream astronaut club tee pink.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "Bey Jorts",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/Bey Jorts.png",
    type: "best",
    category: "shorts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "Evidence Hoodie Brown",
    price: 133,
    currency: "DT",
    image: "img/t shirts/hoodie1.png",
    type: "best",
    category: "hoodies",
    availability: "inStock",
    size: "L",
  },
];

// Product array
const productContainer = document.getElementById("productContainer");
const paginationContainer = document.getElementById("pagination");
const itemsPerPage = 9;
let currentPage = 1;
let filteredProducts = products; // Initially, all products are shown
let selectedAvailability = "all"; // Default availability filter
let maxPrice = 1000; // Default max price

// Elements for price display
const priceRangeInput = document.getElementById("priceRange");
const priceMaxDisplay = document.getElementById("priceMax");
const priceMinDisplay = document.getElementById("priceMin");

// Sorting dropdown element
const sortOptions = document.getElementById("sortOptions");

// Function to render products for the current page
function renderProducts(page) {
  productContainer.innerHTML = "";
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  currentProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
        <div class="card no-border position-relative">
          <img
            src="${product.image}"
            class="card-img-top img-bg rounded-5"
            alt="${product.name}"
          />
          <div class="card-body">
            <button class="add-to-cart-btn">
              <img src="img/addred.png" alt="" /> Add to Cart
            </button>
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price} ${product.currency}</p>
            <img src="img/heart.png" class="heart-img add-to-wishlist" alt="heart" />
          </div>
        </div>
      `;

    const heartImg = card.querySelector(".heart-img");
    card.addEventListener(
      "mouseover",
      () => (heartImg.style.display = "block")
    );
    card.addEventListener("mouseout", () => (heartImg.style.display = "none"));

    heartImg.addEventListener("click", () => {
      heartImg.src = heartImg.src.includes("redheart.png")
        ? "img/heart.png"
        : "img/redheart.png";
    });

    // Attach event listeners for cart and wishlist
    card
      .querySelector(".add-to-cart-btn")
      .addEventListener("click", () => addToCart(product));
    heartImg.addEventListener("click", () => addToWish(product));

    productContainer.appendChild(card);
  });

  renderPagination();
}

// Function to render pagination
function renderPagination() {
  paginationContainer.innerHTML = "";
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.className = "pagination-btn";
    button.innerText = i;

    if (i === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      currentPage = i;
      renderProducts(currentPage);
    });

    paginationContainer.appendChild(button);
  }
}

// Function to sort products
function sortProducts() {
  const sortValue = sortOptions.value;

  if (sortValue === "price-high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortValue === "price-low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "best-sellings") {
    filteredProducts.sort((a, b) =>
      a.type === "best" ? -1 : b.type === "best" ? 1 : 0
    );
  }

  renderProducts(currentPage);
}

// Function to filter products
function filterProducts() {
  const categoryCheckboxes = document.querySelectorAll(
    '.form-check-input[type="checkbox"]:checked'
  );
  const selectedCategories = Array.from(categoryCheckboxes).map(
    (checkbox) => checkbox.value
  );

  const sizeCheckboxes = document.querySelectorAll(".custom-size-btn:checked");
  const selectedSizes = Array.from(sizeCheckboxes).map(
    (checkbox) => checkbox.value
  );

  filteredProducts = products
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
    )
    .filter(
      (product) =>
        selectedAvailability === "all" ||
        product.availability === selectedAvailability
    )
    .filter(
      (product) =>
        selectedSizes.length === 0 || selectedSizes.includes(product.size)
    )
    .filter((product) => product.price <= maxPrice);

  sortProducts();
  currentPage = 1; // Reset to page 1 after filtering
  renderProducts(currentPage);
}

// Event listeners
priceRangeInput.addEventListener("input", (event) => {
  maxPrice = parseInt(event.target.value, 10);
  priceMaxDisplay.innerText = `${maxPrice} DT`;
  filterProducts();
});

sortOptions.addEventListener("change", sortProducts);

document
  .querySelectorAll('.form-check-input[name="availability"]')
  .forEach((radio) => {
    radio.addEventListener("change", (event) => {
      selectedAvailability = event.target.value;
      filterProducts();
    });
  });

document
  .querySelectorAll('.form-check-input[type="checkbox"], .custom-size-btn')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
  });

// Initial render
renderProducts(currentPage);

// CART PAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wish = JSON.parse(localStorage.getItem("wish")) || [];
const cartIcon = document.querySelector('.navbar img[alt="Cart"]');
const wishIcon = document.querySelector('.navbar img[alt="Wishlist"]');

// Function to add a product to the cart
function addToCart(product) {
  if (!cart.some((item) => item.name === product.name)) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartIcon();
    alert(`${product.name} has been added to your cart!`);
  } else {
    alert("This item is already in the cart!");
  }
}

// Function to add/remove a product from the wishlist
function addToWish(product) {
  const index = wish.findIndex((item) => item.name === product.name);
  if (index !== -1) {
    wish.splice(index, 1);
    alert(`${product.name} has been removed from your wishlist!`);
  } else {
    wish.push(product);
    alert(`${product.name} has been added to your wishlist!`);
  }
  localStorage.setItem("wish", JSON.stringify(wish));
  updateWishIcon();
}

// Function to update cart and wishlist icons
function updateCartIcon() {
  const badge =
    document.querySelector(".cart-badge") || createBadge(cart.length, "cart");
  badge.innerText = cart.length;
  cartIcon.parentNode.appendChild(badge);
}

function updateWishIcon() {
  const badge =
    document.querySelector(".wish-badge") || createBadge(wish.length, "wish");
  badge.innerText = wish.length;
  wishIcon.parentNode.appendChild(badge);
}

function createBadge(count, type) {
  const badge = document.createElement("span");
  badge.classList.add(`${type}-badge`);
  badge.style.cssText = `
    position: absolute;
    top: 30px;
    right: ${type === "cart" ? "-2px" : "65px"};
    background-color: black;
    color: white;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    font-size: 12px;
    font-weight: bold;
  `;
  badge.innerText = count;
  return badge;
}

// Event listener to navigate to the cart page
cartIcon.addEventListener("click", () => {
  window.location.href = "./cart.html";
});

// Call update functions on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartIcon();
  updateWishIcon();
});
