
const url = 'https://mosiahdc.github.io/wdd230/chamber/data/members.json';

const cards = document.querySelector('#directory-cards');

async function getMemberData() {

    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

getMemberData()


const displayMembers = (members) => {
    members.forEach(member => {

        let card = document.createElement('section');

        let logo = document.createElement('img');
        let name = document.createElement('p');
        let address = document.createElement('p');    
        let phone = document.createElement('p');       
        let website = document.createElement('p'); 
        let membership = document.createElement('p');
        let description = document.createElement('p');

        name.setAttribute('class', 'section-header');
        name.textContent = `${member.name}`;

        logo.setAttribute('src', `https://mosiahdc.github.io/wdd230/chamber/images/${member.image}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');

        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;

        website.innerHTML = `<a href="${member.website}" target="_blank">${member.website}</a>`;

        membership.setAttribute('class', 'membership');

        if (member.membership_level === "NP") {
            membership.setAttribute('id', 'member-np');
        } else if (member.membership_level === "Bronze") {
            membership.setAttribute('id', 'member-bronze');
        } else if (member.membership_level === "Silver") {
            membership.setAttribute('id', 'member-silver');
        } else if (member.membership_level === "Gold") {
            membership.setAttribute('id', 'member-gold');
        }
        membership.textContent = `${member.membership_level} Member`;

        description.setAttribute('class', 'description');
        description.textContent = `${member.description}`;


        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(description);

        cards.appendChild(card);
    });
};