// Array of products
const products = [
  {
    name: "Admis blue tee",
    price: 73.9,
    currency: "DT",
    image: "./img/t shirts/Admis blue tee.png",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: "S",
  },
  {
    name: "Admis pink tee",
    price: 73.9,
    currency: "TND",
    image: "./img/t shirts/Admis pink tee.png",
    type: "sale",
    category: "tshirts",
    availability: "inStock",
    size: "L",
  },
  {
    name: "asrar alghaz tee black",
    price: 78.9,
    currency: "DT",
    image: "./img/t shirts/asrar alghaz tee black.png",
    type: "sale",
    category: "tshirts",
    availability: "outOfStock",
    size: "S",
  },
  {
    name: "asrar alghaz tee white",
    price: 78.9,
    currency: "DT",
    image: "./img/t shirts/asrar alghaz tee white.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "Vintage 23 beygurl tee",
    price: 92.9,
    currency: "DT",
    image: "./img/t shirts/Vintage 23 beygurl tee.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "vintage 23 beyboi tee",
    price: 92.9,
    currency: "DT",
    image: "./img/t shirts/vintage 23 beyboi tee.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "dream astronaut club tee yellow",
    price: 78.9,
    currency: "DT",
    image: "./img/t shirts/dream astronaut club tee yellow.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "asrar",
    price: 78.9,
    currency: "DT",
    image: "./img/t shirts/asrar.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "dream astronaut club tee pink",
    price: 78.9,
    currency: "DT",
    image: "./img/t shirts/dream astronaut club tee pink.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: "XL",
  },
  {
    name: "Bey Jorts",
    price: 78.9,
    currency: "DT",
    image: "./img/t shirts/Bey Jorts.png",
    type: "best",
    category: "shorts",
    availability: "inStock",
    size: "XL",
  },
];

if (document.body.id === "index-page") {
  // Function to render products
  function renderProducts(products) {
    const productContainer = document.querySelector(".row");
    productContainer.innerHTML = ""; // Clear previous products

    // Limit the number of products to 4
    const limitedProducts = products.slice(0, 4);

    limitedProducts.forEach((product) => {
      const productHTML = `
            <a style="text-decoration: none; color: inherit" href="./Shop.html">
                <div class="col card-home" data-type="${product.type}">
        <div class="card no-border">
          <span class="badge bg-secondary position-absolute top-0 start-0 m-2">${
            product.type === "new"
              ? "New"
              : product.type === "sale"
              ? "Sale"
              : "Best"
          }</span>
          <img src="${product.image}" class="card-img-top img-bg" alt="${
        product.name
      }" />
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price} DT</p>
          </div>
        </div>
      </div>
            </a>

  
    `;
      productContainer.innerHTML += productHTML;
    });
  }

  // Filter products by type
  function filterProducts(type) {
    const filteredProducts = type
      ? products.filter((product) => product.type === type)
      : products;
    renderProducts(filteredProducts);
  }

  // Event listeners for filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const type = e.target.dataset.type;
      filterProducts(type);
    });
  });

  // Render all products initially
  renderProducts(products);

  document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.querySelector(".newsletter form");

    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value;

      if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = ""; // Clear the input field
      } else {
        alert("Please enter a valid email address.");
      }
    });
  });
}

if (document.body.id === "about-page") {
  //ABOUT US INSTA PICS SELECTION //
  document.querySelectorAll(".overlay").forEach((overlay, index) => {
    overlay.addEventListener("click", () => {
      const urls = [
        "https://www.instagram.com/p/C1kDgudsUAk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/C1hA7Kdo93c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/C1ZU8JSM6sk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/CqOBxgMo4Wk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/C60-1Aws5YI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/CkSsgd2o6i6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      ];
      window.open(urls[index], "_blank");
    });
  });
}
