function menuToggle() {
    //Salvando todo o ID #menu-area na VARIÁVEL let menuArea para facilitar a manipulação dos dados.
    let menuArea = document.getElementById('menu-area');

    if (menuArea.classList.contains('menu-area-opened') == true) {
        menuArea.classList.remove('menu-area-opened');
    } else {
        menuArea.classList.add('menu-area-opened');
    }
}