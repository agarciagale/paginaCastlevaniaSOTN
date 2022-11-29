const nav = document.getElementById('nav');

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

