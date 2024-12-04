const products = [
  {
    name: "Admis blue tee",
    price: 73.9,
    currency: "DT",
    image: "img/t shirts/Admis blue tee.png",
    type: "best",
    category: "tshirts",
    availability: "outOfStock",
    size: ["M", "L"],
  },
  {
    name: "Admis pink tee",
    price: 73.9,
    currency: "TND",
    image: "img/t shirts/Admis pink tee.png",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: ["S", "M", "XL"],
  },
  {
    name: "asrar alghaz tee black",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/asrar alghaz tee black.png",
    type: "sale",
    category: "tshirts",
    availability: "inStock",
    size: ["XS", "S"],
  },
  {
    name: "asrar alghaz tee white",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/asrar alghaz tee white.png",
    type: "sale",
    category: "tshirts",
    availability: "outOfStock",
    size: ["M", "L"],
  },
  {
    name: "Vintage 23 beygurl tee",
    price: 92.9,
    currency: "DT",
    image: "img/t shirts/vintage 23 beygurl tee.png",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: ["XS", "S", "M"],
  },
  {
    name: "vintage 23 beyboi tee",
    price: 92.9,
    currency: "DT",
    image: "img/t shirts/vintage 23 beyboi tee.png",
    type: "best",
    category: "tshirts",
    availability: "outOfStock",
    size: ["L", "XL"],
  },
  {
    name: "dream astronaut club tee yellow",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/dream astronaut club tee yellow.png",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: ["M"],
  },
  {
    name: "asrar",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/asrar.png",
    type: "sale",
    category: "tshirts",
    availability: "outOfStock",
    size: ["S", "L"],
  },
  {
    name: "dream astronaut club tee pink",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/dream astronaut club tee pink.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: ["XS", "M"],
  },
  {
    name: "Bey Jorts",
    price: 78.9,
    currency: "DT",
    image: "img/t shirts/Bey Jorts.png",
    type: "new",
    category: "shorts",
    availability: "inStock",
    size: ["M", "L"],
  },
  {
    name: "Evidence Hoodie Brown",
    price: 133,
    currency: "DT",
    image: "img/t shirts/hoodie-brown.png",
    type: "sale",
    category: "hoodies",
    availability: "outOfStock",
    size: ["S", "M", "L"],
  },
  {
    name: "Evidence Hoodie Gray",
    price: 133,
    currency: "DT",
    image: "img/t shirts/hoodie-gray.png",
    type: "best",
    category: "hoodies",
    availability: "inStock",
    size: ["L", "XL"],
  },
  {
    name: "Evidence Hoodie Pink",
    price: 133,
    currency: "DT",
    image: "img/t shirts/hoodie-pink.png",
    type: "new",
    category: "hoodies",
    availability: "inStock",
    size: ["M", "L"],
  },
  {
    name: "Evidence Hoodie Purple",
    price: 133,
    currency: "DT",
    image: "img/t shirts/hoodie-purple.png",
    type: "sale",
    category: "hoodies",
    availability: "inStock",
    size: ["S", "M"],
  },
  {
    name: "Evidence Hoodie Cyan",
    price: 133,
    currency: "DT",
    image: "img/t shirts/hoodie-cyan.png",
    type: "new",
    category: "hoodies",
    availability: "outOfStock",
    size: ["M", "L", "XL"],
  },
  {
    name: "Evidence Pants Brown",
    price: 100,
    currency: "DT",
    image: "img/t shirts/pants-brown.png",
    type: "best",
    category: "pants",
    availability: "inStock",
    size: ["S", "M"],
  },
  {
    name: "Evidence Pants Gray",
    price: 100,
    currency: "DT",
    image: "img/t shirts/pants-gray.png",
    type: "sale",
    category: "pants",
    availability: "outOfStock",
    size: ["M"],
  },
  {
    name: "Evidence Pants Pink",
    price: 100,
    currency: "DT",
    image: "img/t shirts/pants-pink.png",
    type: "new",
    category: "pants",
    availability: "inStock",
    size: ["M", "L", "XL"],
  },
  {
    name: "Evidence Pants Purple",
    price: 100,
    currency: "DT",
    image: "img/t shirts/pants-purple.png",
    type: "sale",
    category: "pants",
    availability: "outOfStock",
    size: ["S", "L"],
  },
  {
    name: "Evidence Pants Cyan",
    price: 100,
    currency: "DT",
    image: "img/t shirts/pants-cyan.png",
    type: "best",
    category: "pants",
    availability: "inStock",
    size: ["XS", "M"],
  },
  {
    name: "FBEYI Hoodie Black",
    price: 123,
    currency: "DT",
    image: "img/t shirts/hoodie-fbi-black.png",
    type: "new",
    category: "hoodies",
    availability: "outOfStock",
    size: ["M", "L", "XL"],
  },
  {
    name: "FBEYI Hoodie Dark Blue",
    price: 123,
    currency: "DT",
    image: "img/t shirts/hoodie-fbi-dblue.png",
    type: "sale",
    category: "hoodies",
    availability: "inStock",
    size: ["XS", "S", "M"],
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
        <div class="card no-border position-relative card-shop">
          <span class="badge bg-danger position-absolute rounded-5 top-0 start-0 m-3">${
            product.availability === "outOfStock" ? "Sold Out" : ""
          }</span>          <img
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

  const sizeCheckboxes = document.querySelectorAll(".custom-size-btn");

  const selectedSizes = Array.from(sizeCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

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
        selectedSizes.length === 0 ||
        product.size.some((size) => selectedSizes.includes(size)) // Check if any selected size matches the product sizes
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
  const alertContainer = document.getElementById("alert-container");

  function showAlert(message, type) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = "alert";
    alert.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alertContainer.appendChild(alert);

    setTimeout(() => {
      alert.classList.remove("show");
      alert.addEventListener("transitionend", () => alert.remove());
    }, 3000);
  }

  if (product.availability === "outOfStock") {
    showAlert(`${product.name} is out of stock.`, "danger");
  } else if (!cart.some((item) => item.name === product.name)) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartIcon();
    showAlert(`${product.name} has been added to your cart!`, "success");
  } else {
    showAlert("This item is already in the cart!", "warning");
  }
}

// Function to add/remove a product from the wishlist
function addToWish(product) {
  const alertContainer = document.getElementById("alert-container");

  function showAlert(message, type) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = "alert";
    alert.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alertContainer.appendChild(alert);

    // Automatically remove the alert after 3 seconds
    setTimeout(() => {
      alert.classList.remove("show");
      alert.addEventListener("transitionend", () => alert.remove());
    }, 3000);
  }

  const index = wish.findIndex((item) => item.name === product.name);
  if (index !== -1) {
    wish.splice(index, 1);
    showAlert(`${product.name} has been removed from your wishlist!`, "danger");
  } else {
    wish.push(product);
    showAlert(`${product.name} has been added to your wishlist!`, "success");
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

  if (type === "cart") {
    badge.addEventListener("click", function () {
      window.location.href = "./cart.html";
    });
  }

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
