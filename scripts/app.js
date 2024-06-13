import { createHeader, updateHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { getUser, logout } from './services/authService.js';
import { navigateTo } from './services/initService.js';

document.addEventListener('DOMContentLoaded', () => {
    createHeader();
    createFooter();
    initApp();
});

export function initApp() {
    const user = getUser();
    updateHeader(user);
    const userInfo = document.getElementById('user-info');

    if (user) {
        if (userInfo) {
            userInfo.innerHTML = `Howdy, ${user.username}`;
        }
        navigateTo('home');
    } else {
        if (userInfo) {
            userInfo.innerHTML = '';
        }
        navigateTo('home');
    }
}

export function handleLogin() {
    initApp();
}

export function handleLogout() {
    initApp();
}

export function handleRegister() {
    initApp();
}