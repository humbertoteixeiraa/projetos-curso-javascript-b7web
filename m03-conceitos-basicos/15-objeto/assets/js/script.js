//Criação do ARRAYS com elementos de vários tipos:
let carros = [
    'Palio', 
    'Uno', 
    'Corolla', 
    'Ferrari',
    function teste() {
        console.log('Testando 1, 2, 3...');
    }
];

let ingredientes = [
    ["uva", "pera", "maça"],
    ["arroz", "macarrão"]
]

//Mostrando todos os elementos do ARRAY.
console.log(carros);
console.log(ingredientes)

//Mostrando um elemento específico do ARRAY.
console.log(carros[0]) //Mostrando o primeiro elemento.
console.log(carros[4] ()) //Mostrando o quinto elemento, que é uma função.
console.log(ingredientes[1] [0]); //Mostrando o primeiro elemento do segundo array de dentro do array INGREDIENTES.
