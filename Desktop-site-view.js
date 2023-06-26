function responsiveDesktop() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    if (width < 768) {
        document.documentElement.classList.add("desktop");
    } else {
        document.documentElement.classList.remove("desktop");
    }
}

window.addEventListener("resize", responsiveDesktop);
responsiveDesktop();
