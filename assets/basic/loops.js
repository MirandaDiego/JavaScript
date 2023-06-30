let cores = ['preto', 'azil', 'vermelho', 'amarelo']

let cores2 =[
    {nome: 'preto', qt: 2},
    {nome: 'azul', qt: 3},
    {nome:'amarelo', qt: 5}
];

for(let n = 0; n < 10; n++){
    console.log('Frase' + n);
}

for(let n = 0; n<cores.length; n++){
    console.log(cores[n]);
}
for(let i in cores2){
    console.log(cores[i].nome);
}

for(let cor of cores){
    console.log(cor);
}

for(let cor of cores2){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}
