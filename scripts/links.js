const baseURL = 'https://mosiahdc.github.io/wdd230/';
const linksURL = 'https://mosiahdc.github.io/wdd230/data/links.json';

const activityLinks = document.querySelector('#activity-links');

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        const li = document.createElement('li');
        const weekTitle = document.createTextNode(week.week + ': ');
        li.appendChild(weekTitle);

        week.activities.forEach((activity, index) => {
            const link = document.createElement('a');
            link.href = baseURL + activity.url;
            link.textContent = activity.title;
            li.appendChild(link);

            if (index < week.activities.length - 1) {
                const separator = document.createTextNode(' | ');
                li.appendChild(separator);
            }
        });

        activityLinks.appendChild(li);
    });
}

getLinks();