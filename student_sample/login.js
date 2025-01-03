document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
       // Basic Validation
       if (!email || !password) {
          event.preventDefault();  // Stop form submission
          errorMessage.textContent = 'Both fields are required.';
          return;
      }
  
      // Simple email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          event.preventDefault();  // Stop form submission
          errorMessage.textContent = 'Invalid email format.';
          return;
      }
      
        try {
          // Send a POST request with Fetch API
          const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
  
          if (!response.ok) {
            throw new Error(
              `Login failed: ${response.status} ${response.statusText}`
            );
          }
  
          const data = await response.json(); // Assuming server responds with JSON
          console.log("Response from server:", data);
  
          // Display success message or redirect
          alert("Login Successful!");
          window.location.href = "/student/dashboard.html";
        } catch (error) {
          alert(`Error: ${error.message}`);
        }
      });
    } else {
      console.error("Form element with ID 'loginForm' not found.");
    }
  });
  