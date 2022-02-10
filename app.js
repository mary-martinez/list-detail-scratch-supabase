import { fetchToys } from './fetch-utils.js';
import { renderToy } from './render.js';

const shelves = document.querySelector('.shelves');

window.addEventListener('load', async () => {
    shelves.textContent = '';
    const toys = await fetchToys();
    // console.log(toys);
    for (let toy of toys) {
        const thisToy = renderToy(toy);
        shelves.append(thisToy);
    }
});