const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

    menuToggle.setAttribute("aria-expanded", isOpen);

});


document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// ==============================
// MENU CATEGORY FILTERING
// ==============================

const categoryButtons = document.querySelectorAll(".category-btn");

const foodCards = document.querySelectorAll(".food-card");


categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class

        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class to selected button

        button.classList.add("active");

        let selectedCategory = button.getAttribute("data-filter");

        foodCards.forEach(function(card) {

            let foodCategory = card.getAttribute("data-category");

            if (selectedCategory === "all" || selectedCategory === foodCategory) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});



// ==============================
// SHOPPING CART
// ==============================

let cart = [];


// Select cart elements

const cartCount = document.getElementById("cartCount");

const cartTotal = document.getElementById("cartTotal");

const addButtons = document.querySelectorAll(".add-cart");


// Add Food to Cart

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let foodName = button.getAttribute("data-name");

        let foodPrice = Number(button.getAttribute("data-price"));


        // Add selected food

        cart.push({
            name: foodName,
            price: foodPrice
        });


        // Update Cart

        updateCart();


        // Show Notification

        showNotification(foodName + " added to cart!");

    });

});



// Update Cart Information

function updateCart() {

    let totalItems = cart.length;

    let totalPrice = 0;


    cart.forEach(function(item) {

        totalPrice += item.price;

    });


    cartCount.textContent = totalItems;

    cartTotal.textContent = "Rs. " + totalPrice.toLocaleString("en-US");

}



// ==============================
// SUCCESS NOTIFICATION
// ==============================

function showNotification(message) {

    let notification = document.createElement("div");

    notification.className = "notification";

    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        ${message}
    `;


    document.body.appendChild(notification);


    setTimeout(function() {

        notification.remove();

    }, 2500);

}