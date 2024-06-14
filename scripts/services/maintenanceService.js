// services/maintenanceService.js
import { loadCars, loadMaintenanceLogs } from './carService.js';

export const cars = loadCars();
export const maintenanceLogs = loadMaintenanceLogs();

export function getUniqueCarMakes() {
    return [...new Set(cars.map(car => car.make))];
}

export function filterLogsByMake(make) {
    if (make === 'all') {
        return maintenanceLogs;
    }
    return maintenanceLogs.filter(log => {
        const car = cars.find(car => car.id === log.carId);
        return car && car.make.toLowerCase() === make.toLowerCase();
    });
}
