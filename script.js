document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous messages
    const formMessages = document.getElementById('form-messages');
    formMessages.textContent = '';
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (name === '' || email === '' || message === '') {
        formMessages.textContent = 'All fields are required.';
        return;
    }
    
    // Display a message (you can replace this with actual form submission logic)
    formMessages.textContent = 'Thank you for contacting us! We will get back to you soon.';
    formMessages.style.color = '#5cb85c'; // Success message color
    
    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});
