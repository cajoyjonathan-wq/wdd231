import { discovers } from "../data/discover.mjs";

const display1 = document.querySelector('#feature');

const displayFeaturesData = (discovers) => {
    discovers.forEach((discover) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let portrait = document.createElement('figure');
        let img = document.createElement('img');
        let featureAddress = document.createElement('address');
        let featureDescription = document.createElement('p');
        let buttonF = document.createElement('button');

        title.textContent = `${discover.title}`;

        portrait.appendChild(img);
        img.setAttribute('src', discover.imageExtension);
        img.setAttribute('alt', `${discover.title}`);
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        img.setAttribute('loading', 'lazy');

        featureAddress.textContent = `Address: ${discover.address}`;
        featureDescription.textContent = `Description: ${discover.description}`;
        buttonF.textContent = `Learn More`;

        card.appendChild(title);
        card.appendChild(portrait);
        card.appendChild(featureAddress);
        card.appendChild(featureDescription);
        card.appendChild(buttonF);
        card.classList.add('feature');

        display1.appendChild(card);
    })
}

displayFeaturesData(discovers);


// let confirmation = Number(localStorage.getItem("date")) || 0;

// confirmation++;

// localStorage.setItem("date", confirmation);

const displayCount = document.querySelector("#date");

const msInDay = 84600000;
const currentVisit = Date.now();

const lastVisit = localStorage.getItem("lastDateVisit");

if (!lastVisit) {
    displayCount.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = currentVisit - Number(lastVisit);
    const daysDifference = Math.floor(timeDifference / msInDay);

    if (daysDifference < 1) {
        displayCount.textContent = "Back so soon! Awesome!";
    } else {
        const dayLabel = daysDifference === 1 ? "day" : "days";
        displayCount.textContent = `You last visited ${daysDifference} ${dayLabel} ago.`
    }
}

localStorage.setItem("lastDateVisit", currentVisit);