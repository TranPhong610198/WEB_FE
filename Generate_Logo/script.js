const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const xPos = document.getElementById("xPos");
const yPos = document.getElementById("yPos");

const textPart1 = document.getElementById("textPart1");
const textPart2 = document.getElementById("textPart2");
const logoImage = document.getElementById("logoImage");

text1.addEventListener("input", () => {
    textPart1.textContent = text1.value;
});

text2.addEventListener("input", () => {
    textPart2.textContent = text2.value;
});

xPos.addEventListener("input", () => {
    logoImage.style.transform = `translate(${xPos.value}px, ${yPos.value}px)`;
});

yPos.addEventListener("input", () => {
    logoImage.style.transform = `translate(${xPos.value}px, ${yPos.value}px)`;
});
