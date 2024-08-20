const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (add more as needed)
    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Store user data (for demonstration, using localStorage)
    localStorage.setItem('username', username);

    // Redirect to dashboard.html
    window.location.href = 'dashboard.html';
});

// Retrieve data on dashboard.html
const welcomeMessage = document.getElementById('welcomeMessage');
const storedUsername = localStorage.getItem('username');

if (storedUsername) {
    welcomeMessage.textContent = `Welcome, ${storedUsername}!`;
} else {
    // Handle case where user is not logged in
    welcomeMessage.textContent = 'Please register first.';
}
