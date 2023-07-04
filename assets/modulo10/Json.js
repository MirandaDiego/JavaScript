let pessoa = {
    nome: "Diego",
    idade: 90,
    estetica: {
        altura: 180,
        peso: 34
    }

};
//------- json.parse

let pessoa1 = JSON.parse('{"nome": "diego","sobrenome": "Miranda","idade": 90 }');

console.log(pessoa1)  //string para JSOn

//-- Json.stringify

let p = JSON.stringify({nome: 'Diego', sobrenome: 'sobrenome'});
console.log(p)  //json para string 

//---- callBAck

function alertar(){
    alert("opa opa")
}

let nome = 'Boniek';
setTimeout(alertar(2000));    //  <----- 
let sobrenome = 'Lacerda';
console.log(nome + sobrenome)


// ----------------Promises

function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("Pegando a temperatura");

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);
    });
}

//usando a Promise  (then)

let temp = pegarTemperatura();
temp.then(function(resultado){
    console.log("Temperatura:" + resultado)
});
temp.catch(function(error){
    console.log("Deu erro")
});

