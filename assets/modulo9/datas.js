let d = new Date();
console.log(d)  //Data com todos detalhes
console.log(d.toDateString)  // Apenas Data
console.log( d.toString) // em string

let da = new Date(2020, 0, 1, 12, 30, 30);
console.log(da)

let ds = new Date();
let novoValor = ds.getFullYear() // ano
let n  =ds.getDay()  //dia da semana 
let dia = ds.getDate(); // dia atual
console.log(novoValor)

let novoVal = Date.now();  //bancodedados

ds.setMonth(11);  // trocar mês
ds.setDate( ds.getDate() + 5)    // pega o dia atual e acrescenta + 5 dias 
ds.setHours(ds.getHours + 3) // + 3horas
console.log(no);






