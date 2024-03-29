document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Reset previous messages
        formMessage.innerHTML = '';

        // Fetch form fields
        const name = contactForm.elements['name'].value.trim();
        const email = contactForm.elements['email'].value.trim();
        const message = contactForm.elements['message'].value.trim();

        // Validate name
        if (name === '') {
            displayErrorMessage('Please enter your name.');
            return;
        }

        // Validate email
        if (!isValidEmail(email)) {
            displayErrorMessage('Please enter a valid email address.');
            return;
        }

        // Validate message length
        if (message.length < 10) {
            displayErrorMessage('Message should be at least 10 characters long.');
            return;
        }

        // If all validations pass, submit the form
        // You can add code here to send the form data to a backend server

        displaySuccessMessage('Message sent successfully!');
    });

    function isValidEmail(email) {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayErrorMessage(message) {
        formMessage.innerHTML = `<p class="error">${message}</p>`;
    }

    function displaySuccessMessage(message) {
        formMessage.innerHTML = `<p class="success">${message}</p>`;
    }
});
