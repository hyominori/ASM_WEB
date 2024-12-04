// Register User
function registerUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pwd").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!email || !password || !phone) {
        alert("Please fill in all fields!");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits!");
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingEmail = users.find(user => user.email === email);
    if (existingEmail) {
        alert("Email is already registered!");
        return;
    }

    const existingPhone = users.find(user => user.phone === phone);
    if (existingPhone) {
        alert("Phone number is already registered!");
        return;
    }

    users.push({ email, password, phone });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    window.location.href = "Login.html";
}

// Login User
function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pwd").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user)); 
        window.location.href = "Home.html";
    } else {
        alert("Invalid email or password!"); 
    }
}
