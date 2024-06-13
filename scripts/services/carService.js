// carService.js

// hardcoded car data for now 
const cars = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Corolla',
        year: 1995,
        totalExpenses: 1800,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Toyota_Corolla_%28E100%29_liftback.jpg/1024px-Toyota_Corolla_%28E100%29_liftback.jpg',
        description: 'A nice car'
    },
    {
        id: 2,
        make: 'Honda',
        model: 'Accord',
        year: 1993,
        totalExpenses: 2000,
        image: 'https://bringatrailer.com/wp-content/uploads/2023/03/1993_honda_accord_1993_honda_accord_4f2c4fd6-d5d9-4775-9d7e-74e51fbd007c-nnkxsy-66722-14958.jpg',
        description: 'Another nice car'
    },
    {
        id: 3,
        make: 'Ford',
        model: 'Probe',
        year: 1997,
        totalExpenses: 1500,
        image: 'https://goauctionmpc.blob.core.windows.net/stock/698-7-medium.jpg?v=63786734366090',
        description: 'Yet another nice car'
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
}
