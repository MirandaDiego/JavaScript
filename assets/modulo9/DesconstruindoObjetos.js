let pessoa ={
    nome: 'Diego',
    sobrenome: 'miranda',
    idade:90,
    social:{
        insta: 'mirandadiegod',
        face:{
            url: 'Diego Miranda',
            seguidores: 5000
        } 
    },
    nomecompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }

};

let{nome, idade, social:{insta:{url:intagram}}} = pessoa

let {nome: pessoaNome, sobrenome, idade } = pessoa;   //mudando o nome da caracteristica nome
console.log(pessoaNome, sobrenome, idade)


// criar uma função que receba um obj e retorne uma caracteristica de tal:

function pegarNomeCompleto(obj){
    return obj.nome+' '+obj.sobrenome;
}

console.log(pegarNomeCompleto(pessoa));

//----------------------------------------------Desconstruçãode array:

let info = ['digo miranda', 'paulo siqueira', 'joao de barros']

let = [nomeCompleto, nome, sobrenome] = info;
let = [nomeCompleto, , ,  ]  // pegar somente um item 

console.log(nomecompleto, nome, sobrenome);