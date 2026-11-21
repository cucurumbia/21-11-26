const text = document.querySelector(".content__text");
const paragraphs = text.querySelectorAll(".text");


const panel = document.querySelector(".content__settings");
const closeButton = document.querySelector(".settings__close");
const openButton = document.querySelector("#openSettings");


const form = document.querySelector(".settings__form");
const font = form.querySelector("select");
const size = form.querySelector("#fontSize");
const color = form.querySelector('input[type="color"]');
const spacing = form.querySelector('input[type="range"]');
const backgrounds = form.querySelectorAll('input[type="radio"]');


function applySettings() {
    text.style.fontFamily = `"${font.value}", sans-serif`;
    text.style.color = color.value;


    for (const paragraph of paragraphs) {
        if (size.value !== "" && size.validity.valid) {
            paragraph.style.fontSize = size.value + "px";
        }


        paragraph.style.lineHeight = spacing.value + "%";
    }


    const selectedBackground = form.querySelector('input[type="radio"]:checked');
    const swatch = selectedBackground.parentElement;
    document.body.style.backgroundColor = getComputedStyle(swatch).backgroundColor;
}


form.addEventListener("input", applySettings);


form.addEventListener("submit", function (event) {
    event.preventDefault();
});


closeButton.addEventListener("click", function () {
    panel.style.display = "none";
    openButton.hidden = false;
});


openButton.addEventListener("click", function () {
    panel.style.display = "";
    openButton.hidden = true;
});


applySettings();