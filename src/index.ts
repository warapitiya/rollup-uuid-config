import uuid from 'uuid/v4';

document.addEventListener('DOMContentLoaded', () => {
    const element = document.createElement('h1');
    element.innerText = 'Oh yeah! ' + uuid();
    document.body.appendChild(element);
    console.log('loaded');
});