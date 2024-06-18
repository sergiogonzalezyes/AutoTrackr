import { login } from './authService.js';
import { handleLogin } from '../app.js';
import { navigateTo } from './navigateService.js';

export function loginListeners() {
    const loginForm = document.getElementById('login-form');
    const loginLink = document.getElementById('login-link');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const user = await login(username, password);
                handleLogin(); // Re-create the header and re-initialize the app
                // Optionally redirect or update UI after successful login
            } catch (error) {
                console.error('Login error:', error);
                // Optionally handle/display the error message
                alert('Login failed. Please try again.');
            }
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('login');
        });
    }
}
