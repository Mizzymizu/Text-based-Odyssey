document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the signup form and its elements
  const signupForm = document.querySelector(".signup-form");
  const loginForm = document.querySelector(".login-form");

  const signUpFormHandler = async (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById("name-signup");
    const emailInput = document.getElementById("email-signup");
    const passwordInput = document.getElementById("password-signup");

    // Get user input values
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && email && password) {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to sign up.");
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  const loginFormHandler = async (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email-login");
    const passwordInput = document.getElementById("password-login");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email && password) {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log in.");
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  
  if (signupForm) {
    signupForm.addEventListener("submit", signUpFormHandler);
  }

  if (loginForm) {
    loginForm.addEventListener("submit", loginFormHandler);
  }
});
