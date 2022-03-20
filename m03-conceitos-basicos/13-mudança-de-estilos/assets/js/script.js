//As funções abaixo selecionam o H1 pelo ID, entram na sua lista de classes, removem todas as classes de cores existentes e adicionam uma classe referente à cor selecionada.
function azul() {
    limpar(); //Função aninhada.
    document.getElementById("texto").classList.add('azul');
}

function vermelho() {
    limpar(); //Função aninhada.
    document.getElementById("texto").classList.add('vermelho');
}

function verde() {
    limpar(); //Função aninhada.
    document.getElementById("texto").classList.add('verde');
}

//A função abaixo seleciona o H1 pelo ID, entra na sua lista de classes e remove todas as classes de cores existentes.
function limpar() {
    document.getElementById("texto").classList.remove('azul');
    document.getElementById("texto").classList.remove('vermelho');
    document.getElementById("texto").classList.remove('verde');
}

//*********
function mostrarTelefone() {
    document.getElementById("telefone").style.display = "block";
    document.getElementById("botaoTelefone").style.display = "none";
}