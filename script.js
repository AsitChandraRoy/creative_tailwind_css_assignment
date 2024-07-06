const htmlTag = document.getElementById("htmlTag");
const switchToggle = document.getElementById("switch");
switchToggle.addEventListener("click" , function () {
    htmlTag.classList.toggle("dark");

});