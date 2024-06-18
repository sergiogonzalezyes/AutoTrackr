import { register } from './authService.js';
import { handleRegister } from '../app.js';
import { navigateTo } from './navigateService.js';

export function registerListeners() {
    const registerForm = document.getElementById('register-form');
    const registerLink = document.getElementById('register-link');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('new-username').value;
            const password = document.getElementById('new-password').value;
            const email = document.getElementById('email').value;

            try {
                await register(username, password, email);

                alert('Registration successful!');
                // Registration successful
                handleRegister(); // Re-create the header and re-initialize the app
                // Optionally, navigate to another page or update UI as needed
                navigateTo('login');
            } catch (error) {
                // Registration failed
                console.error('Registration error:', error);
                // Handle/display the error message on the registration form
                alert('Registration failed. Please try again.'); // Example alert, replace with actual error handling
                // Stay on the registration form
            }
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('register');
        });
    }
}
