const tooglebtn = document.querySelector("#toggle-btn");
const sidebar = document.querySelector("#sidebar");

function toogleSidebar() {
    sidebar.classList.toggle("close");

    Array.from(sidebar.querySelectorAll(".show")).forEach((item) => {
        item.classList.remove("show");
    })
}

function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate");

    if (sidebar.classList.contains("close")) {
        sidebar.classList.toggle("close");
    }
}