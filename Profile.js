function loadProfile() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        alert("Please login to access your profile!");
        window.location.href = "Login.html";
        return;
    }
    document.getElementById("profile-email").innerText = user.email;
    document.getElementById("profile-phone").innerText = user.phone;
}

// Logout user
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "Login.html";
}

// Initialize profile
window.onload = loadProfile;