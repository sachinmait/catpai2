// Form Submission Handling
document.getElementById('enroll-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Basic validation
    if (name && email && phone) {
        alert(`Thank you, ${name}! We will contact you shortly.`);
        document.getElementById('enroll-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
