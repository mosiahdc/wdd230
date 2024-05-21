const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

const mainH1 = main.querySelector("h1");
const mainH2 = main.querySelectorAll("h2");

const card = document.querySelectorAll(".card");
const cardText = card.querySelectorAll(":scope > a");



modeButton.addEventListener("click", () => {

    if (modeButton.textContent == "🌓" || modeButton.textContent == "🌑") {
        modeButton.textContent = "🌕";
        main.style.background = "#153448";

        mainH1.style.borderBottom = "1px solid white";

        for (let i = 0; i < card.length; i++) {
            mainH2[i].style.background = "#fff";
            mainH2[i].style.color = "#153448";

            card[i].style.color = "#ffffff";
        }

        for (let i = 0; i < cardText.length; i++) {
            cardText[i].style.color = "#ffffff";
        }
        
    } else {
        modeButton.textContent = "🌑";
        main.style.background = "#fff";
        main.style.color = "#000";

        mainH1.style.borderBottom = "1px solid black";

        for (let i = 0; i < card.length; i++) {
            mainH2[i].style.background = "#153448";
            mainH2[i].style.color = "#fff";

            card[i].style.color = "#000";
        }
    }

});