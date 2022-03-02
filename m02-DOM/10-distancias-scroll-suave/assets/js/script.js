//Função para que faz o botão subir a tela suavemente.
function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//Função para ocultar o botão caso a barra de rolagem já esteja no topo.
function decidirBotaoScroll() {
    if (window.scrollY === 0) {
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

//Faz a vericação da posição da barra de rolagem e oculta ou mostra o botão.
window.addEventListener('scroll', decidirBotaoScroll);