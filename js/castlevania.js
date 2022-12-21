const nav = document.getElementById('nav');
const hamburgerMenu = document.getElementById('hamburger-menu');
const btnHistoria = document.getElementById('boton-historia');
const btnPersonajes = document.getElementById('boton-personajes');
const btnArsenal = document.getElementById('boton-arsenal');
const btnBestiario = document.getElementById('boton-bestiario');
const flechaArriba = document.getElementById('flecha-arriba');
const linkBiblio = document.getElementById('enlace-bibliografia');
const enlacesMasInfo = document.querySelectorAll('.mas-informacion');

// Boton de menu hamburguesa
hamburgerMenu.addEventListener("click", menuResponsive);

//Botones de las secciones
btnHistoria.addEventListener("click", function(){
    scrollASeccion('historia')
});
btnPersonajes.addEventListener("click", function(){
    scrollASeccion('personajes')
});
btnArsenal.addEventListener("click", function(){
    scrollASeccion('arsenal')
});
btnBestiario.addEventListener("click", function(){
    scrollASeccion('bestiario')
});

//Boton de la flecha para subir arriba
flechaArriba.addEventListener("click", subirArriba);

//Boton para mostrar el alert de la bibliografía
linkBiblio.addEventListener("click", bibliografia);

//Funciones

function scrollASeccion(seccion) {
    let rect = document.getElementById(seccion).getBoundingClientRect();
    window.scrollBy(0, rect.top - 58);
}

function menuResponsive() {
    nav.classList.toggle("active");
}

function subirArriba() {
    window.scroll(0, 0);
}

function bibliografia() {
    alert("Imagenes: \n-Logo : @spascifica , https://www.steamgriddb.com/logo/29174\n-Fondo layout movil: @frederick , https://www.pinterest.com/pin/382031980894423353/\n-Fondo layout tablet : https://hotcore.info/babki/alucard-castlevania-lords-of-shadow-wallpaper.htm\n-Fondo layout pc : https://wallhere.com/es/wallpaper/1876433\n-Richter vs Dracula (imagen seccion historia): @orioto, https://twitter.com/orioto/status/1060959170604793857\n\nInformación e imagenes:\n-Castlevania fandom:  https://castlevania.fandom.com/es/wiki/Castlevania:_Symphony_of_the_Night\n-The Castlevania dungeon: https://castlevaniadungeon.net/\n-Villains wiki: https://villains.fandom.com/wiki/Scylla_(mythology)\n-Wikipedia: https://es.wikipedia.org/wiki/Castlevania:_Symphony_of_the_Night\n\nFuentes: \n-Google fonts\n\nIconos: \n-FontAwesome");
}