import { sidedish } from "../data/sidedish.js";
const display1 = document.querySelector('#dish');

const displayFeaturesData = (foods) => {
    foods.forEach((food) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let portrait = document.createElement('figure');
        let img = document.createElement('img');
        let foodDescription = document.createElement('p');
        let foodType = document.createElement('address');

        title.textContent = `${food.title}`;

        portrait.appendChild(img);
        img.setAttribute('src', food.imageExtension);
        img.setAttribute('alt', `${food.title}`);
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        img.setAttribute('loading', 'lazy');

        foodDescription.textContent = `${food.description}`;
        foodType.textContent = `Food Type: ${food.foodType}`


        card.appendChild(title);
        card.appendChild(portrait);
        card.appendChild(foodDescription);
        card.appendChild(foodType);
        card.classList.add('foodcards');

        display1.appendChild(card);
    })
}

displayFeaturesData(sidedish);