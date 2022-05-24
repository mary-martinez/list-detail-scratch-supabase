export function renderToy(toy) {
    const a = document.createElement('a');
    a.setAttribute('id', 'broccoli');
    a.href = `/toys/?id=${toy.id}`;

    const div = document.createElement('div');
    div.classList.add('toy');

    const h2 = document.createElement('h2');
    h2.classList.add('name');
    h2.textContent = `${toy.name}`;

    const img = document.createElement('img');
    img.classList.add('toy-image');
    img.src = `.${toy.image}`;

    div.append(h2, img);

    a.append(div);
    return (a);
}

export function renderToyDetails(toy) {
    const div = document.createElement('div');
    div.classList.add('render-details');

    const h1 = document.createElement('h1');
    h1.classList.add('toy-name');
    h1.textContent = `${toy.name} the ${toy.type}`;

    const img = document.createElement('img');
    img.setAttribute('id', `${toy.name.toLowerCase()}-img`);
    img.classList.add('toy-detail-image');
    img.src = `..${toy.image}`;

    const p = document.createElement('p');
    p.classList.add('toy-description');
    p.textContent = `${toy.name} is a ${toy.colors} ${toy.type.toLowerCase()}, perfect for ${toy.strength}!`;

    div.append(h1, img, p);
    return div;
}