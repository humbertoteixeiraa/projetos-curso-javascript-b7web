function verde() {
    //Os comandos abaixo selecionam o elemento #exemplo, entram em sua lista de classes e removem as classes vermelho e azul.
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');

    //Esse comando seleciona o elemento #exemplo, entra em sua lista de classes e adiciona a classe verde.
    document.querySelector('#exemplo').classList.add('verde');
}

function vermelho() {
    //Os comandos abaixo selecionam o elemento #exemplo, entram em sua lista de classes e removem as classes verde e azul.
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');

    //Esse comando seleciona o elemento #exemplo, entra em sua lista de classes e adiciona a classe vermelho.
    document.querySelector('#exemplo').classList.add('vermelho');
}   

function azul() {
    //Os comandos abaixo selecionam o elemento #exemplo, entram em sua lista de classes e removem as classes verde e vermelho.
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('vermelho');

    //Esse comando seleciona o elemento #exemplo, entra em sua lista de classes e adiciona a classe azul.
    document.querySelector('#exemplo').classList.add('azul');
}