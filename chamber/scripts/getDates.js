const getDate = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    
    return currentYear;
}

const displayLastModified = () => {
    const lastModified = document.lastModified;
    
    const pLastModified = document.getElementById("lastModified");

    pLastModified.textContent = `John Ralph Mosiah Dela Cruz | WDD 230 | Last Modified: ${lastModified}`;
}

const displayInfo = () => {
    displayLastModified();
}

displayInfo();