//wishlist.js

function renderWishlistInModal() {
  const wishlistModalBody = document.getElementById("wishlistModalBody");
  wishlistModalBody.innerHTML = ""; // Clear the modal body before adding new products

  if (wish.length === 0) {
    wishlistModalBody.innerHTML = "<p>Your wishlist is empty.</p>";
  } else {
    wish.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("card", "mb-3");
      productCard.style.maxWidth = "540px";
      productCard.innerHTML = `
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${product.image}" class="img-fluid rounded-start" alt="${product.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.price} ${product.currency}</p>
                  <button class="btn btn-danger remove-from-wishlist-btn">Remove</button>
                </div>
              </div>
            </div>
          `;

      // Event listener to remove the product from the wishlist
      const removeFromWishlistBtn = productCard.querySelector(
        ".remove-from-wishlist-btn"
      );
      removeFromWishlistBtn.addEventListener("click", () => {
        removeFromWishlist(product);
        renderWishlistInModal(); // Re-render the modal after removal
      });

      wishlistModalBody.appendChild(productCard);
    });
  }
}

// Function to remove product from the wishlist
function removeFromWishlist(product) {
  const productIndex = wish.findIndex((item) => item.name === product.name);
  if (productIndex !== -1) {
    wish.splice(productIndex, 1); // Remove the product from the array
    localStorage.setItem("wish", JSON.stringify(wish)); // Update the wishlist in localStorage
    updateWishIcon(); // Update the wishlist icon
  }
}

// Event listener for the wishlist icon click
wishIcon.addEventListener("click", () => {
  console.log("Wishlist icon clicked");
  renderWishlistInModal(); // Populate the modal with wishlist products
  const wishlistModal = new bootstrap.Modal(
    document.getElementById("wishlistModal")
  );
  wishlistModal.show(); // Show the modal
  console.log("Modal should be shown");
});
