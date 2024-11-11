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

const kidShirts = [
  {
    name: "Lose Shirt",
    price: 1500,
    description: padDescription(
      "This super soft cotton t-shirt keeps your little one comfy all day long.",
      descriptionLength
    ),
    imgUrl: "./img/childIMg/a.jpg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
    col: "green",
  },
  {
    name: "Casual Shirt",
    price: 1200,
    description: padDescription(
      "Perfect for everyday adventures, this shirt is casual and comfy.",
      descriptionLength
    ),
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    imgUrl: "./img/childIMg/bb.webp",
    col: "green",
  },
  {
    name: "Cotton Shirt",
    price: 1800,
    description: padDescription(
      "Keep your kid cool and comfy with this breathable cotton shirt.",
      descriptionLength
    ),
    imgUrl: "./img/childIMg/c.jpg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
    col: "orange",
  },
  {
    name: "Dino Shirt",
    price: 2500,
    description: padDescription(
      "A fun graphic tee with cool designs that your child will love.",
      descriptionLength
    ),
    imgUrl: "./img/childIMg/d.jpg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "blue",
  },
  {
    name: "Casual Shirt",
    price: 1200,
    description: padDescription(
      "Perfect for everyday adventures, this shirt is casual and comfy.",
      descriptionLength
    ),
    imgUrl: "./img/childIMg/e.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "blue",
  },

  {
    name: "Smart Shirt",
    price: 2800,
    description: padDescription(
      "For special occasions, this smart shirt gives your little one a dapper look.",
      descriptionLength
    ),
    imgUrl: "./img/childIMg/f.jpg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
    col: "yellow",
  },
  {
    name: "Trendy Shirt",
    price: 1700,
    description: padDescription(
      "This trendy checkered shirt adds style to your child's everyday outfits.",
      descriptionLength
    ),
    imgUrl: "./img/childIMg/f.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "blue",
  },
  {
    name: "Sporty Shirt",
    price: 2100,
    description: padDescription(
      "A cool slim-fit shirt for your sporty little one, great for outings.",
      descriptionLength
    ),
    imgUrl: "./img/childIMg/g.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "yellow",
  },
];

console.log(kidShirts);

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
    renderShirts(kidShirts);
  } else {
    const filteredShirts = kidShirts.filter((shirt) => shirt.col === color);
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
  renderShirts(kidShirts);
});
