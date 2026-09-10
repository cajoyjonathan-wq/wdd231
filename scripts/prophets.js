const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch('https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json');
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portait = document.createElement('img');
        let dateBirth = document.createElement('p');
        let placeBirth = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portait.setAttribute('src', prophet.imageurl);
        portait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portait.setAttribute('loading', 'lazy');
        portait.setAttribute('width', '340');
        portait.setAttribute('height', '340');

        dateBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;


        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);
        card.appendChild(portait);

        cards.appendChild(card);

    });
}