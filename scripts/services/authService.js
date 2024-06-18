// authService.js

export async function login(username, password) {
    const loginData = {
        Username: username,
        PasswordHash: password, // Assuming your backend expects the password hash
    };

    try {
        const response = await fetch('http://localhost:5241/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user)); // Store user info in local storage
        return user; // Return user data if login successful
    } catch (error) {
        console.error('There was a problem with login:', error.message);
        throw error; // Propagate error to handle it in the calling function
    }
}

export function register(username, password, email) {
    const registrationData = {
        Username: username,
        PasswordHash: password, // Assuming your backend expects the password hash
        Email: email
    };

    return fetch('http://localhost:5241/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response JSON if needed
    })
    .catch(error => {
        console.error('There was a problem with registration:', error.message);
        throw error; // Rethrow the error to handle it in the caller function
    });
}


export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function logout() {
    localStorage.removeItem('user');
}
