const themeButton = document.getElementById('themeButton');


themeButton.addEventListener("mousedown", function () {

    themeButton.style.opacity = "0.75";
    themeButton.classList.add('rotate-45');

});

themeButton.addEventListener("mouseup", function () {
    themeButton.style.opacity = "1";
    themeButton.classList.remove('rotate-45');
});

themeButton.addEventListener("mouseleave", function () {
    themeButton.style.opacity = "1";
});


const bodyBg = document.getElementsByTagName('body')[0];

themeButton.addEventListener("click", function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    bodyBg.style.backgroundColor = randomColor;

})


