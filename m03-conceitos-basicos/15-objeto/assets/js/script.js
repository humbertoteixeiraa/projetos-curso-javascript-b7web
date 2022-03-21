//Criação do ARRAY com elementos de vários tipos:
let carros = [
    'Palio', 
    'Uno', 
    'Corolla', 
    'Ferrari',
    function teste() {
        console.log('Testando 1, 2, 3...');
    }
];

//Criação de OBJETO com propriedade de vários tipos:
let carro = {
    nome: 'Fiat',
    modelo: 'Uno de Firma',
    peso: '800kg',
    ligado: false,
    ligar: function() {
        this.ligado = true;
        console.log("Ligando o " + this.modelo);
        console.log("VRUM! ... VRUM! ...");
    },
    acelerar: function() {
        if (this.ligado == true) {
            console.log("VRUUUUUUUUUUUUUUUUUUUUUUUUUM ... PÁ PÁ PÁ...")
        } else {
            console.log("Impossível acelerar. O " + this.nome + " " + this.modelo + " não está ligado!")
        }
    }
};


//Acessando os OBJETOS e exibindo no console:
console.log("Modelo: " + carro.modelo);
carro.ligar();
carro.acelerar();

// ***********************************

//Criação de um ARRAY que armazena OBJETOS:
let carroes = [
    {nome: 'Fiat', modelo: 'Palio'},
    {nome: 'Fiat', modelo: 'Uno'},
    {nome: 'Toyota', modelo: 'Corolla'},
    {nome: 'Ferrari', modelo: 'Spider'},
]

//Acessando os OBJETOS do ARRAY e exibindo no console:
console.log(carroes[2].nome); //Acessou o NOME do terceiro OBJETO do ARRAY.