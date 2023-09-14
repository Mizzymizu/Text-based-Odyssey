// Get a reference to the login form and its elements
const loginForm = document.querySelector('.login-form');
const emailInput = document.getElementById('email-login');
const passwordInput = document.getElementById('password-login');

// Event listener for form submission
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get user input values
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Perform basic client-side validation (you can add more)
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Send a POST request to the server for login
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Redirect to a protected dashboard or profile page
      window.location.href = '/dashboard';
    } else {
      // Handle login error (e.g., incorrect credentials)
      const data = await response.json();
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while logging in');
  }
});
