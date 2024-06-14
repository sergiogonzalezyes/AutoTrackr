// carService.js

// hardcoded car data for now 
const cars = [
    {   
        id: 1,
        carId: 1,
        make: 'Toyota',
        model: 'Corolla',
        year: 1995,
        totalExpenses: 1800,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Toyota_Corolla_%28E100%29_liftback.jpg/1024px-Toyota_Corolla_%28E100%29_liftback.jpg',
        description: 'A nice car'
    },
    {
        id: 2,
        carId: 2,
        make: 'Honda',
        model: 'Accord',
        year: 1993,
        totalExpenses: 2000,
        image: 'https://bringatrailer.com/wp-content/uploads/2023/03/1993_honda_accord_1993_honda_accord_4f2c4fd6-d5d9-4775-9d7e-74e51fbd007c-nnkxsy-66722-14958.jpg',
        description: 'Another nice car'
    },
    {
        id: 3,
        carId: 3,
        make: 'Ford',
        model: 'Probe',
        year: 1997,
        totalExpenses: 1500,
        image: 'https://goauctionmpc.blob.core.windows.net/stock/698-7-medium.jpg?v=63786734366090',
        description: 'Yet another nice car'
    }
];

const maintenanceLogs = [
    {
        id: 1,
        carId: 1,
        cost: 100,
        date: '2021-01-01',
        time: '12:00:00',
        log: 'Oil change',
        details: 'Replaced the oil and filter. Used synthetic oil and a Fram filter. 5-30 weight. Car has 200,000 miles on it.'
    },
    {
        id: 2,
        carId: 2,
        cost: 200,
        date: '2021-01-02',
        time: '12:00:00',
        log: 'Catback exhaust install',
        details: 'Installed a new catback exhaust system. Sounds hard! Car has 180,000 miles on it.'
    },
    {
        id: 3,
        carId: 3,
        cost: 150,
        date: '2021-01-01',
        time: '12:00:00',
        log: 'K&N air filter replacement',
        details: 'Replaced the air filter with a K&N filter. Car has 150,000 miles on it.'
    }
];

export function loadCars() {
    // Fetch and process car data fetch hardcoded cars for now
    console.log('Loading cars...');
    return cars;
}

export function loadMaintenanceLogs() {
    // Fetch and process maintenance logs
    console.log('Loading maintenance logs...');
    return maintenanceLogs;
}
