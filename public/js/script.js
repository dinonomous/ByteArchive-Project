async function submitForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const apiUrl = "http://localhost:5001/auth/login";

  console.log(`Sending username: ${email}, password: ${password}`);

  try {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName: email, password: password }),
    });
    const data = await response.json();
    console.log("Fetched data:", data);

    if (!response.ok) {
        var message = data.message;
      if (!response.body.success) {
        const alertDiv = document.createElement("div");
        alertDiv.classList.add(
          "alert",
          "alert-danger",
          "alert-dismissible",
          "fade",
          "show",
          "position-fixed"
        );
        alertDiv.setAttribute("role", "alert");
        alertDiv.style.top = "1rem";
        alertDiv.style.left = "1rem";
        alertDiv.style.right = "1rem";

        // Set the inner HTML content
        alertDiv.innerHTML = `
            <strong>${message}<strong/>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        // Append the alert to the body
        document.body.appendChild(alertDiv);
      }
    } else {
      
    }
  } catch (error) {
    console.error("Error fetching data:", error); // Handle errors during fetch
  }
}
