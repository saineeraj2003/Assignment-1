const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace with your actual authentication logic
  if (username === 'valid' && password === 'valid') {
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
  } else {
    // Redirect to register page
    window.location.href = 'register.html';
  }
});
