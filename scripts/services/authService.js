// authService.js
export function login(username, password) {
    // Placeholder for login logic (e.g., API call)
    console.log(`Logging in user: ${username}`);
    // Assume login is successful and store user info in local storage
    localStorage.setItem('user', JSON.stringify({ username }));
}

export function register(username, password, email) {
    // Placeholder for registration logic (e.g., API call)
    console.log(`Registering user: ${username}, ${email}`);
    // Assume registration is successful and alert the user
    alert('Registration successful!');
    
}

export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function logout() {
    localStorage.removeItem('user');
}


