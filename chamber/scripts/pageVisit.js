let userVisits = getUserVisits() || 0;
const msToDays = 84600000;
const h4 = document.getElementById("user-visit")

function getDateVisit() {
    let today = Date.now();
    return today;
}

function setUserVisits(visits) {
    localStorage.setItem("userVisits", JSON.stringify(visits));
}

function getUserVisits() {
    return JSON.parse(localStorage.getItem("userVisits"));
}

if (userVisits !== 0) {
    userVisits.lastVisit = userVisits.recentVisit;
    userVisits.recentVisit = Date.now();

    setUserVisits(userVisits);

    let lessThanDay = userVisits.lastVisit + msToDays;
    let userVisit = userVisits.recentVisit;

    if (userVisit <= lessThanDay) {
        h4.textContent = "Back so soon! Awesome!";
    }
    if (userVisit > lessThanDay) {
        let daysMS =  userVisit - userVisits.lastVisit;
        let days = Math.floor(daysMS / msToDays);
        h4.textContent = days == 1 ? `You last visited ${days} day ago.` : `You last visited ${days} days ago.`;
    }
} else {
    h4.textContent = "Welcome! Let us know if you have any questions.";

    let today = getDateVisit();
    userVisits = {
        lastVisit: today,
        recentVisit: today
    }

    setUserVisits(userVisits);
}