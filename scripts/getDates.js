const getDate = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    
    return currentYear;
}

const displayYear = () => {
    const pYear = document.querySelector("footer p");
    const currentYear = getDate();

    pYear.innerHTML = `&#169;${currentYear} &nbsp | &nbsp John Ralph Mosiah Dela Cruz &nbsp | &nbsp Philippines`;
}

const displayLastModified = () => {
    const lastModified = document.lastModified;
    
    const pLastModified = document.getElementById("lastModified");

    pLastModified.textContent = `Last Modification: ${lastModified}`;
}

const displayInfo = () => {
    displayYear();
    displayLastModified();
}

displayInfo();