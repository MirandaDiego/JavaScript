let colors = ['blue', 'pink', 'black']
cor = 'red'

console.log(colors)

let ingredientes = [
    'agua',
    'ovo',
    'farinha',
    'açucar',
    'sal'
]
ingredientes.pop()  //remove o ultimo item do array
ingredientes.shift() //remove o primeiro 

ingredientes.push('cebola');

console.log(`total de ingredientes: ${ingredientes.length}`)

let carros = ['BMW','Ferrari', 'Corsa'];
let x = 1;
console.log('1.' + carros[x]);

carros[1] = 'Audi'

console.log('2.lista com Audi: ', carros);
console.log(carros);

//---------------------------------------
let fruits = ['Maça', 'Pera', 'Mamão', 'Banana']
fruits.push('Limão');
console.log(fruits.join(' ->'));

fruits[fruits.length -1] = 'Caqui';
console.log(fruits);

fruits.sort(); //reordenação de arrays(ordem alfabética)

fruits.reverse(); // inverte os valores

let Bigfruits = fruits.filter((item) =>{  // filtrar frutas com 4 letras
    return item.length > 4;
});
console.log(Bigfruits);

let ok = fruits.every((value) =>{  // verifica todos elementos da lista
  return value.length > 3;
})
if(ok){
    console.log('Todos são maiores que 3');
}else{
    console.log('Não são todos maiores que 3');
}

let ok2 = fruits.some((value) =>{  // verifica se a algum elementos da lista
    return value.length > 3;
  })
  if(ok2){
      console.log('Algum item é maior que 3');
  }else{
      console.log('Nenhum item é maior que 3');
  }

// verificar se à o item que vc quer está dentro da lista:

if(fruits.includes('Uva')){
    console.log('Tem uva sim!')
}else{
    console.log('Nao tem uva!')
}



let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020}
]


cars.sort((a, b) =>{
    if(a.year > b.year){
        return 1;
    }else if(a.year , b.year){
        return -1;
    }else{
        return 0;
    }
});

cars.sort((a,b) => b.year - a.year);

