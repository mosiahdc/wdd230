const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");


modeButton.addEventListener("click", () => {

    if (modeButton.textContent == "🌓" || modeButton.textContent == "🌑") {
        modeButton.textContent = "🌕";
        main.style.background = "#153448";
        main.style.color = "#fff";
        
    } else {
        modeButton.textContent = "🌑";
        main.style.background = "#fff";
        main.style.color = "#000";
    }

});