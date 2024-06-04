const toggleButton = document.querySelector("#toggle");
const toggleImage = document.querySelector('#toggle-img');
const toggleText = document.querySelector("#toggle-text");

const display = document.querySelector('#directory-cards');

toggleButton.addEventListener("click", () => {

    if (toggleText.textContent === "Grid view"){
        toggleText.textContent = "List view";
        toggleImage.src = "images/listview-icon.png"

        display.classList.add("list");
        display.classList.remove("grid");
    } else {
        toggleText.textContent = "Grid view";
        toggleImage.src = "images/gridview-icon.png"

        display.classList.add("grid");
        display.classList.remove("list");
    }

});