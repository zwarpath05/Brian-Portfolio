<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Client-side validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo 'Please fill in all required fields.';
    } else {
        // Validate the email address
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo 'Please enter a valid email address.';
        } else {
            // Send the form data to your email address
            $to = 'bcorcega@brian-corcega.space';
            $subject = 'New contact form submission';
            $message = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

            // Use the mail function to send the email
            if (mail($to, $subject, $message)) {
                echo 'Form submitted successfully';
            } else {
                echo 'Form submission failed';
            }
        }
    }
} else {
    // Handle invalid requests or direct access to the script
    echo 'Invalid request';
}

?>