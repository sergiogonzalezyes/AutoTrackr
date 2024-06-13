import { loadCars } from "../services/carService.js";
import { createElement } from "../utils/domUtils.js";

export const cars = loadCars();
console.log(cars);

export function viewCarsTemplate(cars) {
    const carCards = cars.map(car => {
        const carCard = createElement('div', { class: 'car-card' },
            createElement('img', { src: car.image, alt: car.make + ' ' + car.model }),
            createElement('h3', {}, car.make + ' ' + car.model),
            createElement('p', {}, car.description),
            createElement('p', {}, 'Price: $' + car.totalExpenses),
            createElement('button', {}, 'View')
        );
        return carCard;
    });

    const carList = createElement('div', { id: 'car-list' }, ...carCards);
    const viewCarsSection = createElement('section', { id: 'view-cars' },
        createElement('h2', {}, 'Your Cars'),
        carList
    );
    return viewCarsSection;
}



// export const viewCarsTemplate = `
//     <section id="view-cars">
//         <h2>View Cars</h2>
//         <div id="car-list">
//             <div class="car-card">
//                 <img src="https://via.placeholder.com/200" alt="car">
//                 <h3>Car Name</h3>
//                 <p>Car Description</p>
//                 <p>Price: $100</p>
//                 <button>View</button>
//             </div>
//             <div class="car-card">
//                 <img src="https://via.placeholder.com/200" alt="car">
//                 <h3>Car Name</h3>
//                 <p>Car Description</p>
//                 <p>Price: $100</p>
//                 <button>View</button>
//             </div>
//             <div class="car-card">
//                 <img src="https://via.placeholder.com/200" alt="car">
//                 <h3>Car Name</h3>
//                 <p>Car Description</p>
//                 <p>Price: $100</p>
//                 <button>View</button>
//             </div>
//             <div class="car-card">
//                 <img src="https://via.placeholder.com/200" alt="car">
//                 <h3>Car Name</h3>
//                 <p>Car Description</p>
//                 <p>Price: $100</p>
//                 <button>View</button>
//             </div>
//             <div class="car-card">
//                 <img src="https://via.placeholder.com/200" alt="car">
//                 <h3>Car Name</h3>
//                 <p>Car Description</p>
//                 <p>Price: $100</p>
//                 <button>View</button>
//             </div>
//             <div class="car-card">
//                 <img src="https://via.placeholder.com/200" alt="car">
//                 <h3>Car Name</h3>
//                 <p>Car Description</p>
//                 <p>Price: $100</p>
//                 <button>View</button>
//             </div>
//         </div>
//     </section>

// `;


