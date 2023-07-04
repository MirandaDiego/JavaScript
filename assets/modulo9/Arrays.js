let lista = ['ovo', 'farinha', 'loira', 'morena']
let lista2 = ['feijao', 'arroz', 'batata']
let lista3 = [1, 2, 3, 4, 56]
let array = [
    {nome: 'Diego', id: 1, sobrenome: 'Miranda'},
    {nome: 'Mateus', id:2, sobrenome: 'martins'},
    {nome:'Sabrina', id: 3, sobrenome: 'Sato'}
];

let res = lista.toString() // transforma em uma string o array
let r = lista.join('-')  // pega os elementos e tranforma em uma string separada por o caracter indicado
let re = lista.indexOf('farinha')  // retorna a posição do elemento no array, se não achar retorna -1
let rest = lista

lista.pop() // remove o ultimo elemento da lista
lista.shift() // remove o primeiro
lista.push('ruiva');  // adiciona um novo item no array
lista[0] = 'Ovos';
lista[lista.length] = "branquinha" //  adiciona por ultimo na lista

delete lista[1]; // deleta o elemento porem mantém o espaço no array 
lista.splice(x, y)  //remove a partir do item x  até o y (1,1)->remove um item apenas
let resta = lista.concat(lista2) // concatena dois arrays
lista.sort() //reordena os items do array em ordem alfabetica
lista.reverse() // inverte a ordem

let li = []

li = lista3.map(function(item){     //PEga os elementos do array, multiplica cada elemento e coloca em outro array
    return item*2;
})

for(let i in lista){
    li.push(lista[i] * 2)   // multiplica todos elementos da lista e comoloca em outra
}


li = lista3.filter(function(item){   //retorna true ou false podendo fzr um filtro
    if(item < 20){
        return true;
    }else{
        return false
    }
}) 


li = lista3.every(function(item){  // verifica se os items batem com a condiçao(retorna true ou false)
    if(item < 20){
        return true;
    }else{
        return false
    }
})
li = lista3.some(function(item){  // verifica se à pelo menos um item com a condiçao(retorna true ou false)
    return(item > 20)? true: false;
})

li = lista3.find(function(item){  //retorna o primeiro item q satisfaça a condiçao
    return(item < 0)? true:false;

})  
li = lista3.findIndex(function(item){  //retorna a posiçao do primeiro item q satisfaça a condiçao
    return(item < 0)? true:false;

}) 

let pessoa = array.find(function(item){       //procurar um objeto na lista
    return (item.sobrenome == 'Miranda') ? true : false;
});

let x = pessoa;
console.log(x)







