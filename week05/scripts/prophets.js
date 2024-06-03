
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {

    const response = await fetch(url);
    const data = await response.json();

    //console.table(data.prophets);

    displayProphets(data.prophets);
}

getProphetData()

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        let birthdateSpan = document.createElement('span');
        birthdateSpan.textContent = 'Date of Birth: ';
        birthdate.appendChild(birthdateSpan)
        birthdate.appendChild(document.createTextNode(prophet.birthdate));

        let birthplaceSpan = document.createElement('span');
        birthplaceSpan.textContent = 'Place of Birth: ';
        birthplace.appendChild(birthplaceSpan)
        birthplace.appendChild(document.createTextNode(prophet.birthplace));

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};