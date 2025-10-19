document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', function () {
    status.textContent = 'Sending...';
    status.className = 'text-[#13123F] font-medium';

    // show success text after short delay (before redirect)
    setTimeout(() => {
      status.textContent = '✅ Message sent! Redirecting...';
      status.className = 'text-green-600 font-medium';
    }, 1000);
  });
});
