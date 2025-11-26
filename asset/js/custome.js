const form = document.getElementById("email-form");
const popup = document.getElementById("thankPopup");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload

    // Optionally you can send data via AJAX here

    popup.style.display = "flex"; // Show popup
});

function closePopup() {
    popup.style.display = "none";
    form.reset(); // Clear form after closing
}