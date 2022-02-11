// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderToy, renderToyDetails } from '../render.js';
const test = QUnit.test;

test('renderToy should return an a wrapped div with an h2 and an image', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a id="broccoli" href="/toys/?id=1"><div class="toy"><h2 class="name">Broccoli</h2><img class="toy-image" src="./assets/broccoli.png"></div></a>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderToy({
        id: '1',
        name: 'Broccoli',
        type: 'Unicorn',
        colors: 'pink, blue, and white',
        strength: 'bath time bubbles',
        image: '/assets/broccoli.png'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderToyDetails should return a div with an h1, an img, and a p tag description', (expect) => {
    const expected = `<div class="render-details"><h1 class="toy-name">Broccoli the Unicorn</h1><img id="broccoli-img" class="toy-detail-image" src="../assets/broccoli.png"><p class="toy-description">Broccoli is a pink, blue, and white unicorn, perfect for bath time bubbles!</p></div>`;

    const actual = renderToyDetails({
        id: '1',
        name: 'Broccoli',
        type: 'Unicorn',
        colors: 'pink, blue, and white',
        strength: 'bath time bubbles',
        image: '/assets/broccoli.png'
    });

    expect.equal(actual.outerHTML, expected);
})