import { fetchItemByID } from '../fetch-utils.js';
import { renderToyDetails } from '../render.js';

const toyEl = document.querySelector('body');
const params = new URLSearchParams(window.location.search);
// console.log(params.get('id'));
async function loadToy() {
    const selectedToy = await fetchItemByID(params.get('id'));
    const toyDetails = renderToyDetails(selectedToy);
    toyEl.append(toyDetails);
}

loadToy();