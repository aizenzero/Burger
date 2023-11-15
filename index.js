const toggleBtn = document.getElementById("menu-icon");
const toggleBtnIcon = document.querySelector("#menu-icon img");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
};
