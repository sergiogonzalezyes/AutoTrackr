import { createElement } from '../utils/domUtils.js';
import { navigateTo } from '../services/navigateService.js';
import { getUser, logout } from '../services/authService.js';
import { handleLogout } from '../app.js';

export function createHeader() {
    const header = createElement('header', { id: 'header' }, 
        createElement('h1', {}, 'AutoTrackr'),
        createElement('nav', { id: 'nav-links' }, 
            createElement('ul', {})
        ),
        createElement('div', { id: 'user-info' }, ''),
    );

    document.body.prepend(header);
}

export function updateHeader(user) {
    const navLinks = user
        ? [
            createElement('li', {}, createElement('a', { href: '#home' }, 'Home')),
            createElement('li', {}, createElement('a', { href: '#view-cars' }, 'View Cars')),
            createElement('li', {}, createElement('a', { href: '#log-maintenance' }, 'Log Maintenance')),
            createElement('li', {}, createElement('button', { id: 'logout-button' }, 'Logout'))
          ]
        : [
            createElement('li', {}, createElement('a', { href: '#home' }, 'Home')),
            createElement('li', {}, createElement('a', { href: '#login' }, 'Login')), 
            createElement('li', {}, createElement('a', { href: '#register' }, 'Register'))
          ];

    const navLinksContainer = document.getElementById('nav-links').firstElementChild;
    navLinksContainer.innerHTML = '';
    navLinks.forEach(link => {
        navLinksContainer.appendChild(link);
    });

    addEventListeners();
}

function addEventListeners() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target.getAttribute('href').substring(1);
            navigateTo(target);
        });
    });

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            logout();
            handleLogout(); // Re-initialize to reflect the logout state
        });
    }
}
