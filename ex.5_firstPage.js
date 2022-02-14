document.title = "My first (dynamic) webpage";

const headers = document.querySelectorAll("h2");

const displaySongInfo = (header) => {
    const message = (header === "Then") ?
        "The Beatles (January 13, 1969)" : "Carly Rae Jepsen (March 1, 2012)";
    alert(message);
};

headers.forEach(header => {
    header.addEventListener("click", () => displaySongInfo());
});