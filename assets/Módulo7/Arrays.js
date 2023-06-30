let carros = ['Palio', 
'Uno',
'Corolla',
'Ferrari',
function(){
    console.log('Testando 1, 2, 3....');
}
];
carros[4]();


let ingredientes = [
    ['Uva', 'pera', 'maça'],
    ['arroz', 'feijao', 'ovo']
];

//Objeto:

let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar: function(){
        console.log("ligando o " + this.modelo)
        console.log("VRUM VRUM")
    }
};
let carros2 = [
    {nome: 'Uno', preço: 3000},
    {nome: 'BMW', preço: 2000},
    {nome: 'Ferrai', preço: 1000},
    {nome: 'Wolkiswagem', preço: 7000}

];
console.log(carro.nome);
carro.ligar();
