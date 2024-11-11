const padDescription = (description, length) => {
  if (description.length > length) {
    return description.slice(0, length) + "...";
  }
  return description.padEnd(length, " ");
};

const descriptionLength = 50;
function refresh() {
  location.reload();
}

const womenShirts = [
  {
    name: "Cartoon Shirt",
    price: 1500,
    description: padDescription(
      "A very soft shirt made from premium cotton, perfect for all-day comfort.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/a.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
    col: "black",
  },
  {
    name: "Short Shirt",
    price: 2200,
    description: padDescription(
      "A beautifully designed shirt that stands out, ideal for casual and semi-formal occasions.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/b.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "pink",
  },
  {
    name: "Soft Short Shirt",
    price: 1800,
    description: padDescription(
      "This cotton shirt offers breathability and comfort, making it a must-have in your wardrobe.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/c.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
    col: "pink",
  },
  {
    name: "T Shirt",
    price: 2500,
    description: padDescription(
      "Featuring unique designs, this shirt is perfect for fashion-forward individuals.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/d.jpg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "white",
  },
  {
    name: "Soft Shirt",
    price: 1200,
    description: padDescription(
      "A versatile casual shirt that pairs well with jeans or chinos for a relaxed look.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/e.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "black",
  },
  {
    name: "Formal Shirt",
    price: 2800,
    description: padDescription(
      "An elegant formal shirt tailored for business meetings and events.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/f.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
    col: "purple",
  },

  {
    name: "Casual Shirt",
    price: 1700,
    description: padDescription(
      "A classic checked shirt that adds a touch of style to your everyday outfits.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/g.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "purple",
  },
  {
    name: "Slim Fit Shirt",
    price: 2100,
    description: padDescription(
      "A modern slim fit shirt that enhances your silhouette for a sharp look.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/h.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "green",
  },
  {
    name: "Fit Shirt",
    price: 2100,
    description: padDescription(
      "A modern slim fit shirt that enhances your silhouette for a sharp look.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/i.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "green",
  },
  {
    name: "Soft Shirt",
    price: 2100,
    description: padDescription(
      "A modern slim fit shirt that enhances your silhouette for a sharp look.",
      descriptionLength
    ),
    imgUrl: "./img/womenImg/j.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "black",
  },
];
function addToCart(shirt) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.name === shirt.name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    shirt.quantity = 1;
    cart.push(shirt);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  Swal.fire({
    icon: "success",
    title: "Thank U",
    text: `${shirt.name} added to cart!`,
  });
}

function renderShirts(filteredShirts) {
  const shirtContainer = document.getElementById("cards");
  shirtContainer.classList.add("fade-out");

  setTimeout(() => {
    shirtContainer.innerHTML = "";

    filteredShirts.forEach((shirt) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <div class="img">
                    <img src="${shirt.imgUrl}" alt="${shirt.name}">
                </div>
                <div class="text">
                    <h2>${shirt.name}</h2>
                    <div class="divstar">
                        <div class="price">Rs. ${shirt.price}</div>
                        <div class="star">${shirt.stars}</div>
                    </div>
                    <p>${shirt.description}</p>
                </div>
                <div class="divbtn">
                    <button onclick='addToCart(${JSON.stringify(
                      shirt
                    )})' class="button-86" role="button">Add to Cart</button>
                </div>
            `;
      shirtContainer.appendChild(card);
    });

    shirtContainer.classList.remove("fade-out");
    shirtContainer.classList.add("fade-in");

    setTimeout(() => {
      shirtContainer.classList.remove("fade-in");
    }, 500);
  }, 500);
}

function filterShirtsByColor(color) {
  if (color === "all") {
    renderShirts(womenShirts);
  } else {
    const filteredShirts = womenShirts.filter((shirt) => shirt.col === color);
    renderShirts(filteredShirts);
  }
}

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    const selectedColor = e.target.textContent.toLowerCase();
    filterShirtsByColor(selectedColor);
  });
});

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

document.addEventListener("DOMContentLoaded", () => {
  renderShirts(womenShirts);
});
