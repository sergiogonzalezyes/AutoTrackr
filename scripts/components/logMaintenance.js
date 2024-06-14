
// Log Maintenance Page
// This will have a table of all the logs that have been created for the cars in the system
// It will have a search bar to search for logs
// It will have a filter to filter logs by date
// It will have a button to delete logs
// It will have a button to export logs
// It will have a button to view log details
// It will have a button to create a new log
// It will have a button to edit a log

// components/logMaintenance.js
// components/logMaintenance.js
import { createElement } from '../utils/domUtils.js';
import { cars, maintenanceLogs, getUniqueCarMakes, filterLogsByMake } from '../services/maintenanceService.js';

export function logMaintenanceTemplate() {
    console.log('Cars:', cars);
    console.log('Maintenance Logs:', maintenanceLogs);

    // Extract unique car makes
    const carMakes = getUniqueCarMakes();

    // Create option elements for each car make
    const makeOptions = carMakes.map(make => createElement('option', { value: make.toLowerCase() }, make));

    // Create the main template
    const logMaintenance = createElement('div', { id: 'log-maintenance' },
        createElement('h2', {}, 'Log Maintenance'),
        createElement('div', { id: 'log-maintenance-search' },
            createElement('input', { type: 'search', placeholder: 'Search Logs' })
        ),
        createElement('div', { id: 'log-maintenance-filter' },
            createElement('input', { type: 'date', placeholder: 'Filter Logs' })
        ),
        createElement('div', { id: 'log-maintenance-actions' },
            createElement('button', {}, 'Create New Log')
        ),
        createElement('div', {},
            createElement('button', {}, 'Export Logs'),
            createElement('button', {}, 'Delete Logs')
        ),
        createElement('div', { class: 'filter-table' },
            createElement('label', { for: 'filter-table' }, 'Filter Table:'),
            createElement('select', { id: 'filter-table' },
                createElement('option', { value: 'all' }, 'All'),
                ...makeOptions  // Add the dynamically created options here
            )
        ),
        createElement('div', { id: 'log-maintenance-table' },
            createElement('table', {},
                createElement('thead', {},
                    createElement('tr', {},
                        createElement('th', {}, 'MID'),
                        createElement('th', {}, 'Car'),
                        createElement('th', {}, 'Cost'),
                        createElement('th', {}, 'Date'),
                        createElement('th', {}, 'Time'),
                        createElement('th', {}, 'Log'),
                        createElement('th', {}, 'Details'),
                        createElement('th', {}, 'Actions')
                    )
                ),
                createElement('tbody', { id: 'log-maintenance-tbody' })  // Add ID for tbody to update it later
            )
        )
    );

    return logMaintenance;
}

// Function to render logs
export function renderLogs(logs) {
    const tbody = document.getElementById('log-maintenance-tbody');
    if (!tbody) {
        console.error('log-maintenance-tbody not found');
        return;
    }
    tbody.innerHTML = '';  // Clear existing rows
    logs.forEach((log, index) => {
        const car = cars.find(car => car.id === log.carId);
        const row = createElement('tr', {},
            createElement('td', {}, index + 1),  // Auto-incremented ID
            createElement('td', {}, car ? `${car.make} ${car.model}` : 'Unknown Car'),
            createElement('td', {}, '$' + log.cost),
            createElement('td', {}, log.date),
            createElement('td', {}, log.time),
            createElement('td', {}, log.log),
            createElement('td', {},
                createElement('button', {}, 'Details')
            ),
            createElement('td', {},
                createElement('button', {}, 'Delete'),
                createElement('button', {}, 'Export'),
                createElement('button', {}, 'Edit')
            )
        );
        tbody.appendChild(row);
    });
};





// export const logMaintenanceTemplate = `
//     <div id="log-maintenance">
//         <h2>Log Maintenance</h2>
//                 <div id="log-maintenance-search">
//             <input type="search" placeholder="Search Logs">
//         </div>
//         <div id="log-maintenance-filter">
//             <input type="date" placeholder="Filter Logs">
//         </div>
//         <div id="log-maintenance-actions">
//             <button>Create New Log</button>
//         </div>
//         <div>
//             <button>Export Logs</button>
//             <button>Delete Logs</button>
//         </div>
//         <div class="filter-table">
//             <label for="filter-table">Filter Table:</label>
//             <select id="filter-table">
//                 <option value="all">All</option>
//                 <option value="toyota">Toyota</option>
//                 <option value="honda">Honda</option>
//                 <option value="ford">Ford</option>
//             </select>
//         </div>
//         <div id="log-maintenance-table">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Car</th>
//                         <th>Cost</th>
//                         <th>Date</th>
//                         <th>Time</th>
//                         <th>Log</th>
//                         <th>Details</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>Toyota Corolla</td>
//                         <td>$100</td>
//                         <td>2021-01-01</td>
//                         <td>12:00:00</td>
//                         <td>Log 1</td>
//                         <td><button>Details</button></td>
//                         <td>
//                             <button>Delete</button>
//                             <button>Export</button>
//                             <button>Edit</button>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>2</td>
//                         <td>Honda Accord</td>
//                         <td>$200</td>
//                         <td>2021-01-02</td>
//                         <td>12:00:00</td>
//                         <td>Log 2</td>
//                         <td><button>Details</button></td>
//                         <td>
//                             <button>Delete</button>
//                             <button>Export</button>
//                             <button>Edit</button>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>3</td>
//                         <td>Ford Probe</td>
//                         <td>$150</td>
//                         <td>2021-01-01</td>
//                         <td>12:00:00</td>
//                         <td>Log 1</td>
//                         <td><button>Details</button></td>
//                         <td>
//                             <button>Delete</button>
//                             <button>Export</button>
//                             <button>Edit</button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </div>
// `;
