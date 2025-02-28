const themeButton = document.getElementById('themeButton');

themeButton.addEventListener("mousedown", function () {
    themeButton.style.opacity = "0.50"; 
});

themeButton.addEventListener("mouseup", function () {
    themeButton.style.opacity = "1"; 
});

themeButton.addEventListener("mouseleave", function () {
    themeButton.style.opacity = "1";
});


const bodyBg=document.getElementsByTagName('body')[0];

themeButton.addEventListener("click",function(){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    bodyBg.style.backgroundColor = randomColor;
})