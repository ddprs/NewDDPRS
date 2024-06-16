// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for Schedule Form
document.getElementById('schedule-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const pickup = document.getElementById('pickup').value.trim();
    const dropoff = document.getElementById('dropoff').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value.trim();

    if (pickup === '' || dropoff === '' || date === '' || time === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert('Your ride has been scheduled. Thank you!');
    this.reset();
});

// Navigation Bar Dynamic Behavior
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
