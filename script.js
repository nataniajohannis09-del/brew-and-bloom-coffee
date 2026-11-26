
// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("formMessage").textContent =
            "Thank you, " + name + "! Your message has been received.";

        contactForm.reset();
    });
}

// Checkout Form
const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {
    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("customerName").value;
        const menu = document.getElementById("orderMenu").value;
        const quantity = parseInt(document.getElementById("orderQuantity").value);
        const address = document.getElementById("deliveryAddress").value;
        const payment = document.getElementById("paymentMethod").value;

        const prices = {
            "Cappuccino": 25000,
            "Cafe Latte": 28000,
            "Cafe Mocha": 30000,
            "Matcha Latte": 27000,
            "Chocolate": 25000,
            "Strawberry Milk": 25000,
            "Butter Croissant": 20000,
            "Chocolate Cake": 30000,
            "Chicken Sandwich": 32000
        };

        const total = prices[menu] * quantity;

        document.getElementById("checkoutMessage").innerHTML =
            "Thank you, " + name + "!<br>" +
            "Your order: " + menu + "<br>" +
            "Quantity: " + quantity + "<br>" +
            "Address: " + address + "<br>" +
            "Payment: " + payment + "<br>" +
            "Total: Rp" + total.toLocaleString("id-ID");

        checkoutForm.reset();
    });
}
