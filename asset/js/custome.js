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


// Send mail
document.getElementById("email-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop page refresh

    let formData = new FormData(this);

    fetch("../../send-mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        if (result.trim() === "success") {
            document.getElementById("thankPopup").style.display = "flex";
            document.querySelector("#email-form").reset();
        } else {
            console.log("Failed to send your message. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred.");
    });
});

function closePopup() {
    document.getElementById("thankPopup").style.display = "none";
}