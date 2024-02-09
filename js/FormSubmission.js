function submitForm() {
    // Collect form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Client-side validation
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert('Please fill in all required fields.');
        return; // Exit the function if validation fails
    }

    // Basic email validation using a regular expression
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address.');
        return; // Exit the function if the email is not valid
    }

    // Send the data to the PHP script
    fetch('../form/process_form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message
    })
    .then(response => {
        if (response.ok) {
            // Handle success, e.g., display a thank you message
            alert('Form submitted successfully');
            location.reload();
        } else {
            // Handle errors, e.g., display an error message
            alert('Form submission failed');
        }
    })
    .catch(error => {
        // Handle network errors
        console.error(error);
    });

    let btnSubmit = document.getElementById("submit-button");
    btnSubmit.disabled = true;
}
