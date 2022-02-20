function trocar() {
    //O comando CONTAINS seleciona o elemento #button, entra em sua lista de classes e verifica se a classe preto está presente ...
    if(document.querySelector('button').classList.contains('preto')) {
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('verde');
    } else {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');
    }
}