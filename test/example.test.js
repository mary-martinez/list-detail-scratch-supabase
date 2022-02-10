// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderToy } from '../render.js';
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
        colors: 'pink, blue, and purple',
        strength: 'bathtime bubbles',
        image: '/assets/broccoli.png'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
