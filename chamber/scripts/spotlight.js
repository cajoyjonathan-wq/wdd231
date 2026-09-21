const url = "data/members.json";

const display = document.querySelector('#cards');

async function getBusinessData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayBusinessData(data.members);
    }    
}

function shuffle(members) {
    for (let i = members.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [members[i], members[j]] = [members[j], members[i]];
    }
    return members
}

getBusinessData();

const displayBusinessData = (members) => {
    display.innerHTML = "";

    const filterMembers = members.filter(member => member.membershipLevel != 1);

    const randomTwo = shuffle(filterMembers).slice(0, 2);
    

    randomTwo.forEach((member) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let companyAddress = document.createElement('p');
        let companyPhoneNumber = document.createElement('p');
        let companyWebsite = document.createElement('p');
        let membershipLevel = document.createElement('p');
        let membershipStatus = document.createElement('p');

        fullName.textContent = `${member.companyName}`;

        portrait.setAttribute('src', member.imageExtension);
        portrait.setAttribute('alt', `Profile picture of: ${member.companyName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '340');

        companyAddress.textContent = `Address: ${member.companyAddress}`;
        companyPhoneNumber.textContent = `Phone Number: ${member.companyPhoneNumber}`;
        companyWebsite.textContent = `Website: ${member.companyWebsite}`;
        membershipLevel.textContent = `Membership Number: ${member.membershipLevel}`;
        membershipStatus.textContent = `Membership Status: ${member.membershipStatus}`;

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(companyAddress);
        card.appendChild(companyPhoneNumber);
        card.appendChild(companyWebsite);
        card.appendChild(membershipLevel);
        card.appendChild(membershipStatus);

        display.appendChild(card);

    });
}