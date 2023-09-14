// Get a reference to the signup form and its elements
const signupForm = document.querySelector('.signup-form');
const nameInput = document.getElementById('name-signup');
const emailInput = document.getElementById('email-signup');
const passwordInput = document.getElementById('password-signup');

// Event listener for form submission
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get user input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Perform basic client-side validation (you can add more)
  if (!name || !email || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Send a POST request to the server for signup
  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      // Redirect to a login page after successful signup
      window.location.href = '/login';
    } else {
      // Handle signup error (e.g., email already in use)
      const data = await response.json();
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while signing up');
  }
});
