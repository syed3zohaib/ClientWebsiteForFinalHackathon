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
    location.reload(); // This reloads the current page
}

function performSearch(event) {
    event.preventDefault(); // Prevent form submission
    var navinp = document.getElementById("navinp").value.trim().toLowerCase();

    // Check if input is empty
    if (navinp === "") {
        Swal.fire({
            icon: "warning",
            title: "Input Required",
            text: "Please enter a search term. (e.g., 'men', 'women', 'kid', 'cloth')",
        });
        return;
    }

    // Check for valid search terms and redirect accordingly
    if (["men", "women", "kid", "cloth"].includes(navinp)) {
        console.log("Searching for:", navinp);
        
        // Redirect based on the search term
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
