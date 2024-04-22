/*      DARK MODE       */
const modeButton = document.getElementById("mode");
const fondo = document.querySelector("body");
const logo = document.querySelector("#logo")
const nav = document.querySelectorAll(".navColor");
const h1 = document.querySelectorAll("h1");
const p = document.querySelectorAll("p");
const proyectos = document.querySelectorAll(".contenedor--social > div");
const boton = document.querySelectorAll(".ver-mas");
let lightMode = true;

modeButton.addEventListener("click", () => {
    if (lightMode) {
        modeButton.src = "https://r11.es/assets/moon-svgrepo-com.svg";
        fondo.style.backgroundColor = "var(--background-dark)";
        logo.src = "https://r11.es/assets/r11_logo_white.png";
        nav.forEach(nav => {
            nav.style.color = "lightgray";
        });
        h1.forEach(h1 => {
            h1.style.color = "var(--font-color-white)";
        });
        p.forEach(p => {
            p.style.color = "lightgray";
        });
        proyectos.forEach(proyectos => {
            proyectos.style.backgroundColor = "var(--box-night)";
            proyectos.style.borderColor = "var( --font-color-gray2)";
        });
        boton.forEach(boton => {
            boton.style.backgroundColor = "var(--font-color-gray)";
        });
        lightMode = false;
        console.log(11);
    } else {
        modeButton.src = "https://r11.es/assets/sun-svgrepo-com.svg";
        fondo.style.backgroundColor = "var(--background-white)";
        logo.src = "https://r11.es/assets/r11_logo.png";
        nav.forEach(nav => {
            nav.style.color = "var(--font-color-gray)";
        });
        h1.forEach(h1 => {
            h1.style.color = "var(--font-color-dark)";
        });
        p.forEach(p => {
            p.style.color = "var(--font-color-gray)";
        });
        proyectos.forEach(proyectos => {
            proyectos.style.backgroundColor = "var(--background-white2)";
            proyectos.style.borderColor = "var(--border-color)";
        });
        boton.forEach(boton => {
            boton.style.backgroundColor = "var(--button-colorReal)";
        });
        lightMode = true;
        console.log(0);
    }
})