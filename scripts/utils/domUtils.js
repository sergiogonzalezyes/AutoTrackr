// domUtils.js

// Create a function called createElement that takes a tag, attributes, and children as arguments. 
// The function should create an element with the given tag, set the attributes on the element, 
// and append the children to the element. The function should return the created element.
// utils/domUtils.js
// utils/domUtils.js
export function createElement(tag, attributes, ...children) {
    const element = document.createElement(tag);
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }
    children.forEach(child => {
        if (typeof child === 'string' || typeof child === 'number') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof HTMLElement) {
            element.appendChild(child);
        } else if (Array.isArray(child)) {
            child.forEach(nestedChild => element.appendChild(nestedChild));
        }
    });
    return element;
}



// Create a function called elementToString that takes an element as an argument.
// The function should create a container div, append a clone of the element to the container,
// and return the innerHTML of the container.
export function elementToString(element) {
    const container = document.createElement('div');
    container.appendChild(element.cloneNode(true));
    return container.innerHTML;
}
