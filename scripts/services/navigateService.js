import { homeTemplate } from '../components/home.js';
import { viewCarsTemplate } from '../components/viewCars.js';
import { loginTemplate } from '../components/login.js';
import { registerTemplate } from '../components/register.js';
import { loginListeners } from './loginService.js';
import { registerListeners } from './registerService.js';
import { loadCars } from './carService.js';
import { logMaintenanceTemplate, renderLogs } from '../components/logMaintenance.js';
import { maintenanceLogs } from '../services/maintenanceService.js';

const cars = loadCars();

export function navigateTo(section) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';  // Clear existing content

    const sections = {
        home: homeTemplate,
        'log-maintenance': logMaintenanceTemplate,
        'view-cars': viewCarsTemplate(cars),  // Directly use the DOM elements
        'login': loginTemplate,
        'register': registerTemplate
    };

    if (typeof sections[section] === 'function') {
        mainContent.appendChild(sections[section]());
    } else if (typeof sections[section] === 'string') {
        mainContent.innerHTML = sections[section];
    } else if (sections[section] instanceof HTMLElement) {
        mainContent.appendChild(sections[section]);
    } else {
        mainContent.innerHTML = sections.home;
    }

    if (section === 'log-maintenance') {
        renderLogs(maintenanceLogs);  // Ensure logs are rendered after template is appended
    }

    if (section === 'login' || section === 'register') {
        if (section === 'login') {
            loginListeners();
        } else {
            registerListeners();
        }
    }
}