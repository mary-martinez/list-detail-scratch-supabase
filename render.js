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