//Alterando o texto com uma FUNÇÃO em javascript utilizando PARÂMETRO
function alterar(titulo) {
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = titulo;
}

alterar("Alterando o texto usando PARÂMETRO!");


//Teste de uma FUNÇÃO em javascript utilizando a passagem de dois PARÂMETROS
function somar(x, y) {
    let total = x + y;

    document.getElementById("campo2").value = total;
}

somar(10, 5);


//Teste de uma FUNÇÃO em javascript utilizando a passagem de dois PARÂMETROS e armazenando o resultado no RETURN.
function somar(x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(20, 25);

document.getElementById('campo3').value = resultado;