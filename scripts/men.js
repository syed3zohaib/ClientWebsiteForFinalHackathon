const padDescription = (description, length) => {
  if (description.length > length) {
    return description.slice(0, length) + "...";
  }
  return description.padEnd(length, " ");
};

const descriptionLength = 50;

const menShirts = [
  {
    name: "Soft Shirt",
    price: 1500,
    description: padDescription(
      "A very soft shirt made from premium cotton, perfect for all-day comfort.",
      descriptionLength
    ),
    imgUrl: ".././img/menImg/a.jpeg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
    col: "black",
  },
  {
    name: "Beautiful Shirt",
    price: 2200,
    description: padDescription(
      "A beautifully designed shirt that stands out, ideal for casual and semi-formal occasions.",
      descriptionLength
    ),
    imgUrl: ".././img/menImg/b.jpeg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "white",
  },
  {
    name: "Cotton Shirt",
    price: 1800,
    description: padDescription(
      "This cotton shirt offers breathability and comfort, making it a must-have in your wardrobe.",
      descriptionLength
    ),
    imgUrl: ".././img/menImg/c.jpeg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
    col: "red",
  },
  {
    name: "Design Shirt",
    price: 2500,
    description: padDescription(
      "Featuring unique designs, this shirt is perfect for fashion-forward individuals.",
      descriptionLength
    ),
    imgUrl: ".././img/menImg/d.jpeg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "blue",
  },
  {
    name: "Casual Shirt",
    price: 1200,
    description: padDescription(
      "A versatile casual shirt that pairs well with jeans or chinos for a relaxed look.",
      descriptionLength
    ),
    imgUrl: ".././img/menImg/e.jpeg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "red",
  },
  {
    name: "Soft Shirt",
    price: 2800,
    description: padDescription(
      "An elegant formal shirt tailored for business meetings and events.",
      descriptionLength
    ),
    imgUrl: ".././img/menImg//f.webp",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
    col: "white",
  },
  {
    name: "Designed Shirt",
    price: 1700,
    description: padDescription(
      "A classic checked shirt that adds a touch of style to your everyday outfits.",
      descriptionLength
    ),
    imgUrl: ".././img/menImg//g.jpg",
    stars:
      '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i>',
    col: "black",
  },
  {
    name: "Slim Fit Shirt",
    price: 2100,
    description: padDescription(
      "A modern slim fit shirt that enhances your silhouette for a sharp look.",
      descriptionLength
    ),
    imgUrl: ".././img/menImg//h.png",
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
                </div>`;
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
    renderShirts(menShirts);
  } else {
    const filteredShirts = menShirts.filter((shirt) => shirt.col === color);
    renderShirts(filteredShirts);
  }
}

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    const selectedColor = e.target.textContent.toLowerCase();
    filterShirtsByColor(selectedColor);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const items = document.querySelector(".nav-items");
  const form = document.querySelector("form");

  menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };

  cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
  };

  searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  };

  function performSearch() {
    const navinp = document.getElementById("navinp").value.trim().toLowerCase();

    if (navinp === "") {
      Swal.fire({
        icon: "warning",
        title: "Input Required",
        text: "Please enter a search term. (e.g., 'men', 'women', 'kid', 'cloth')",
      });
      return;
    }

    if (["men", "women", "kid", "cloth"].includes(navinp)) {
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
        text: "Please enter a valid search term.",
      });
    }
  }

  form.onsubmit = (e) => {
    e.preventDefault();
    performSearch();
  };
});

document.addEventListener("DOMContentLoaded", () => {
  renderShirts(menShirts);
});

function refresh() {
  location.reload();
}
