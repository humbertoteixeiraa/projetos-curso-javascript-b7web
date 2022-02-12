//Usando IF e ELSE (SE e SENÃO)
var hora = 21;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else if (hora <= 23) {
    console.log("Usando IF e ELSE (SE e SENÃO):");
    console.log("Boa noite!");
    console.log("");
}


//Usando && (E)
var hora = 12;

if (hora >= 12 && hora < 18) {
    console.log("Usando && (E):");
    console.log("Boa tarde!");
    console.log("");
}


//Usando || (OU)
var hora = 12;

if (hora == 12 || hora == 18) {
    console.log("Usando || (OU):");
    console.log("Você está na hora do rush!");
    console.log("");
}