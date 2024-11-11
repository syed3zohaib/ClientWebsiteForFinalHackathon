function toggleMenu() {
  const items = document.querySelector(".nav-items");
  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");

  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

function closeMenu() {
  const items = document.querySelector(".nav-items");
  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const form = document.querySelector("form");

  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}

function showSearch() {
  const form = document.querySelector("form");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");

  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

function refresh() {
  location.reload();
}

function performSearch(event) {
  event.preventDefault();
  var navinp = document.getElementById("navinp").value.trim().toLowerCase();

  if (navinp === "") {
    Swal.fire({
      icon: "warning",
      title: "Input Required",
      text: "Please enter a search term. (e.g., 'men', 'women', 'kid', 'cloth')",
    });
    return;
  }

  if (["men", "women", "kid", "cloth"].includes(navinp)) {
    console.log("Searching for:", navinp);

    if (navinp === "men") {
      window.location.href = "men.html";
    } else if (navinp === "women") {
      window.location.href = "women.html";
    } else if (navinp === "kid") {
      window.location.href = "child.html";
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Invalid Search Term",
      text: "Please enter a valid search term (e.g., 'men', 'women', 'kid', 'cloth').",
    });
  }
}

function updateCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartList.innerHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
            ${item.name} - Rs.${item.price} (x${item.quantity})
            <div id="uniline">
            <button class="decrement-btn" onclick="decrementQuantity(${index})">-</button>
            <button class="increment-btn" onclick="incrementQuantity(${index})">+</button>
            </div>
            <button class="remove-btn" onclick="removeItemFromCart(${index})">Remove</button>
        `;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  totalElement.textContent = `Total: Rs. ${total}`;
}
function incrementQuantity(index) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateCart();
}

function decrementQuantity(index) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } else {
    removeItemFromCart(index);
  }
  updateCart();
}

function removeItemFromCart(index) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateCart();
}

document.getElementById("clear-cart").addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length > 0) {
    Swal.fire({
      icon: "success",
      title: "Order Confirmed!",
      text: "Thank you for your order. We’ll process it soon.",
      confirmButtonText: "Great!",
    });
  } else {
    Swal.fire({
      icon: "warning",
      title: "No Products in Cart",
      text: "Please add products to your cart before placing an order.",
      confirmButtonText: "OK",
    });
  }
  localStorage.removeItem("cart");
  updateCart();
});

function refresh() {
  location.reload();
}

updateCart();
