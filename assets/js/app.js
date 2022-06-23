const navList = document.querySelector(".nav-list")
const navMenu = document.querySelector(".nav-menu")

navList.addEventListener("click" , () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains ("nav-menu_visible")) {
        navList.setAttribute ("aria-label", "Cerrar menú");
    } else {
        navList.setAttribute ("aria-label", "Abrir menú")
    }
});