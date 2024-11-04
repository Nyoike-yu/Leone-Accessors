// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Simple validation check
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill in all fields.');
    } else if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Message sent successfully!');
        // Normally, you would send the data to a server here.
        e.target.submit(); // Optionally, remove this line to prevent actual submission
    }
});

// Email validation using regex
function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button hover effect animation
const buttons = document.querySelectorAll('button, .cta-button');

buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', function() {
        button.style.transform = 'scale(1)';
    });
});