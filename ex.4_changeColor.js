const square = document.getElementById("square");
const divs = document.querySelectorAll("div");

divs.forEach(div => {
    if (div.id !== "square") {
        div.addEventListener("pointerover", () => {
            square.style.backgroundColor = `${div.id}`;
        });
    };
});