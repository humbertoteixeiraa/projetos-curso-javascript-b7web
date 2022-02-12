//Selecionando e Alterando conteúdo de um ID no HTML:
document.getElementById('exemplo').innerHTML = "João";


//Selecionando e Alterando o conteúdo de uma CLASS no HTML:
document.getElementsByClassName('lista')[0].innerHTML = 'Lista alterada pelo Javascript!';
    //OBS.:O Javascript entende cada classe de mesmo nome como um elemento de um ARRAY.


//Selecionando o conteúdo de uma DIV no HTML:
document.getElementsByTagName('button');


//Selecionando o conteúdo de um tipo NAME no HTML:
document.getElementsByName('email');