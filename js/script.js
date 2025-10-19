document.addEventListener('DOMContentLoaded', function () {
// Update year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');


form.addEventListener('submit', function (e) {
e.preventDefault();


const data = new FormData(form);
const payload = Object.fromEntries(data.entries());


// Simple client-side validation
if (!payload.name || !payload.email || !payload.message) {
status.textContent = 'Please fill required fields.';
return;
}


// For now we'll simulate a send and clear the form
status.textContent = 'Sending...';


setTimeout(() => {
status.textContent = 'Message sent! We will reply to ' + payload.email + ' soon.';
form.reset();
}, 800);
});
});