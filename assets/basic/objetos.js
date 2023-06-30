personagem ={
    nome: 'Diego',
    idade: 24,
    pais: 'Brasil',
    olhos: ['preto', 'azul', 'vermelho'],
    carros: [
        {modelo: 'Fiat', cor: 'Preto'},
        {modelo: 'Porsh',cor: 'Azul'}
    ]
}
personagem.pais = 'Bélgica';

console.log(personagem.nome )
console.log(personagem.olhos[1])
console.log(personagem.carros[1].modelo)

pessoa ={
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    nomeCompleto: function(){
        return this.nome + ' ' + this.sobrenome
    }
}
console.log(pessoa.nomeCompleto());

