<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $phone   = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';

    $to = "durgaprasad@nxltechnologies.com";  // Your email

    $subject = "New Contact Form Message";

    $body = "
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";  // Important for AJAX
    } else {
        echo "error";
    }
}
?>
