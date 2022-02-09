const square = document.querySelector("div");

square.addEventListener("pointerover", () => {
    square.style.backgroundColor = "red";
});

square.addEventListener("pointerout", () => {
    square.style.backgroundColor = "blue";
});