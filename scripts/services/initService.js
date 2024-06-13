import { homeTemplate } from '../components/home.js';
import { logMaintenanceTemplate } from '../components/logMaintenance.js';
import { viewCarsTemplate } from '../components/viewCars.js';
import { loginTemplate } from '../components/login.js';
import { registerTemplate } from '../components/register.js';
import { handleLogin, handleRegister } from '../app.js';
import { login, register } from './authService.js';


export function navigateTo(section) {
    const mainContent = document.getElementById('main-content');
    const sections = {
        home: homeTemplate,
        'log-maintenance': logMaintenanceTemplate,
        'view-cars': viewCarsTemplate,
        'login': loginTemplate,
        'register': registerTemplate
    };
    mainContent.innerHTML = sections[section] || sections.home;

    if (section === 'login' || section === 'register') {
        attachFormListeners();
    }
}

function attachFormListeners() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();``
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            login(username, password);
            handleLogin(); // Re-create the header and re-initialize the app
        });
    }

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

    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('login');
        });
    }
}
