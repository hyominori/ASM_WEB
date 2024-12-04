function handleLoginClick() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        window.location.href = "Profile.html"; // Redirect to profile if logged in
    } else {
        window.location.href = "Login.html"; // Redirect to login if not logged in
    }
}

// Attach event to Login button in Navbar
document.getElementById("Login").addEventListener("click", handleLoginClick);