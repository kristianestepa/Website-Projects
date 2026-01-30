const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noClicks = 0;

const noTexts = [
    "Are you sure?",
    "Really sure??",
    "Think again...",
    "Like think reallyy hard",
    "pwetty pweasee",
    "pleaseee :("
];

noBtn.addEventListener("click", () => {
    noClicks++;

    const textIndex = Math.min(noClicks - 1, noTexts.length - 1);
    noBtn.textContent = noTexts[textIndex];

    const currentSize = 1.2 + noClicks * 0.3;
    yesBtn.style.fontSize = `${currentSize}rem`;
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = "<h1>Happy Valentine's day!</h1>";
});
