const baseURL = 'https://mosiahdc.github.io/wdd230/';
const linksURL = 'https://mosiahdc.github.io/wdd230/data/links.json';

const activityLinks = document.querySelector('#activity-links');

async function getLinks() {

    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data);

}

function displayLinks({weeks}) {
    
    weeks.forEach(week => {

        const li = document.createElement("li");
        let weekNumber = `${week.week}: `;

        week.links.forEach(link => {
            weekNumber += `<a href="${link.url}">${link.title}</a> | `;
        });

        li.innerHTML = weekNumber.slice(0, weekNumber.length - 3)

        activityLinks.appendChild(li);
        
    });
}

getLinks();