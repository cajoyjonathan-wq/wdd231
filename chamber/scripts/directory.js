const url = "data/members.json";

const cards = document.querySelector('#cards');

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinessData(data.members);
}

getBusinessData();

const displayBusinessData = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let companyAddress = document.createElement('p');
        let companyPhoneNumber = document.createElement('p');
        let companyWebsite = document.createElement('p');
        let membershipNumber = document.createElement('p');

        fullName.textContent = `${member.companyName}`;

        portrait.setAttribute('src', member.imageExtension);
        portrait.setAttribute('alt', `Profile picture of: ${member.companyName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '340');

        companyAddress.textContent = `Address: ${member.companyAddress}`;
        companyPhoneNumber.textContent = `Phone Number: ${member.companyPhoneNumber}`;
        companyWebsite.textContent = `Website: ${member.companyWebsite}`;
        membershipNumber.textContent = `Membership Number: ${member.membershipLevel}`;

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(companyAddress);
        card.appendChild(companyPhoneNumber);
        card.appendChild(companyWebsite);
        card.appendChild(membershipNumber);

        cards.appendChild(card);

    });
}