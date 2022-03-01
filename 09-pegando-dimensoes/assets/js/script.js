function trocarImagem(filename, animalname) {
    //Usando o QUERYSELECTOR para "setar" atributos.
    document.querySelector('.imagem').setAttribute('src', 'assets/images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname)
}

function pegarAnimal() {
    //Usando o QUERYSELECTOR para pegar atributos.
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O animal é: "+animal);
}