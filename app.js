
// Newsletter

const form = document.getElementById('subscribeForm');
  const emailInput = document.getElementById('emailInput');
  const messageDiv = document.getElementById('message');

 
  
  
  
  
  // Save email to localStorage and show a message
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    const email = emailInput.value.trim();

    if (email) {
      localStorage.setItem('subscriberEmail', email);
      messageDiv.textContent = `Thanks for subscribing!`;
      form.reset(); // Clear the form
    } else {
      messageDiv.textContent = 'Please enter a valid email address.';
    }
  });

  
  
  
  //Shopping Cart

  document.addEventListener("DOMContentLoaded", function () {
    const openSlideCartBtn = document.getElementById("openSlideCart");
    const closeSlideCartBtn = document.getElementById("closeSlideCart");
    const slideCart = document.getElementById("slideCart");
    const cartItemsList = document.getElementById("slideCartItems");
    const cartCount = document.querySelector(".cart");
    const cartTotal = document.getElementById("cartTotal");
  
    let cart = [];
  
    // Open/Close Cart
    openSlideCartBtn?.addEventListener("click", () => {
      slideCart.classList.add("open");
    });
  
    closeSlideCartBtn?.addEventListener("click", () => {
      slideCart.classList.remove("open");
    });
  
    // Add to Cart Logic
    const addToCartButtons = document.querySelectorAll(".addToCartBttn");
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const productBox = button.closest(".productContainerBox");
        const title = productBox.querySelector(".productTitle").textContent;
        const priceText = productBox.querySelector(".pricingContainer").textContent.trim();
        const price = parseFloat(priceText.replace("$", ""));
        const imageDiv = productBox.querySelector("div[id]");
        const imageId = imageDiv ? imageDiv.id : "default";
        const imageUrl = `images/${imageId}.jpg`;
  
        const existingItem = cart.find((item) => item.title === title);
  
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({ title, image: imageUrl, price, quantity: 1 });
        }
  
        updateCartUI();
      });
    });
  


function updateCartUI() {
    cartItemsList.innerHTML = "";
  
    if (cart.length === 0) {
      cartItemsList.innerHTML = "<li>No items yet</li>";
      cartCount.textContent = "(0)";
      cartTotal.textContent = "Total: $0.00";  // reset total
      return;
    }
  
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="flex: 1;">
            <strong>${item.title}</strong><br>
            <small>Qty: ${item.quantity}</small><br>
            <small>Price: $${(item.price * item.quantity).toFixed(2)}</small>
          </div>
        </div>
      `;
      cartItemsList.appendChild(li);
    });
  
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = `(${totalItems})`;
  
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }
  
  });