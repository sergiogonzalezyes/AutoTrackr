// domUtils.js
export function createElement(tag, attributes = {}, ...children) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    // console.log(element)
    return element;
}
