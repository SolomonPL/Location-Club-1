JS
function addProductToCart(productId) {
    // Add the product to the cart.
  }
  
  function checkout() {
    // Checkout the cart.
  }
  
  const productImages = document.querySelectorAll(".products img");
  productImages.forEach(function(image) {
    image.addEventListener("click", function() {
      // Show the product details.
      const productId = image.dataset.productId;
      const productDetails = document.querySelector(`#product-${productId}`);
      productDetails.classList.toggle("hidden");
    });
  });