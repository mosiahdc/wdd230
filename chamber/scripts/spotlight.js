const url = 'https://mosiahdc.github.io/wdd230/chamber/data/members.json';

const divs = document.querySelector('#spotlights');

async function getMemberData() {

    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

getMemberData()

function displayMembers(members) {
    const spotlightsMember = members.filter((member) => member.membership_level === "Gold" || member.membership_level === "Silver");
    const randomMembers = spotlightsMember.sort(() => 0.5 - Math.random()).slice(0,3);

    randomMembers.forEach(member => {
        const div = document.createElement("div");

        div.setAttribute('class', 'spotlight');

        let logo = document.createElement('img');
        let name = document.createElement('h3');
        let website = document.createElement('p');

        logo.setAttribute('src', `https://mosiahdc.github.io/wdd230/chamber/images/${member.image}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');

        name.textContent = `${member.name}`

        website.innerHTML = `<a href="http://${member.website}" target="_blank">${member.website}</a>`;

        div.appendChild(logo);
        div.appendChild(name);
        div.appendChild(website);

        divs.appendChild(div);
    });
}