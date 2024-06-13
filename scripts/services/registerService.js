import { register } from './authService.js';
import { handleRegister } from '../app.js';
import { navigateTo } from './navigateService.js';

export function registerListeners() {
    const registerForm = document.getElementById('register-form');
    const registerLink = document.getElementById('register-link');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('new-username').value;
            const password = document.getElementById('new-password').value;
            const email = document.getElementById('email').value;
            register(username, password, email);
            handleRegister(); // Re-create the header and re-initialize the app
            navigateTo('login');
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('register');
        });
    }
}
