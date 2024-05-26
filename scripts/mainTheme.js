const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

const mainH1 = main.querySelector("h1");
const mainH2 = main.querySelectorAll("h2");

const card = document.querySelectorAll(".card");


modeButton.addEventListener("click", () => {

    if (modeButton.textContent == "🌓" || modeButton.textContent == "🌑") {
        modeButton.textContent = "🌕";
        main.style.background = "#153448";
        main.style.color = "#fff";

        mainH1.style.borderBottom = "1px solid white";

        for (let i = 0; i < card.length; i++) {
            mainH2[i].style.background = "#fff";
            mainH2[i].style.color = "#153448";

            card[i].style.color = "#fff";
            card[i].style.border = "1px solid #fff";

            const cardLinks = card[i].querySelectorAll("a");
            
            for (let x = 0; x < cardLinks.length; x++) {
                cardLinks[x].style.color = "#fff";
            }
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
            card[i].style.border = "1px solid #000";

            const cardLinks = card[i].querySelectorAll("a");
           
            for (let x = 0; x < cardLinks.length; x++) {
                cardLinks[x].style.color = "#000";
            }
        }
    }

});