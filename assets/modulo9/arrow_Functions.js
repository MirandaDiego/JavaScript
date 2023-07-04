function somar(x, y){
    return x + y;
}

let som = function(x, y){
    return x + y;
}

const soma = (x, y) =>{    // let soma = (x + y) => x + y; 
    return x + y
}

const letras = (nome) =>{   // let letras = nome => nome.lenght
    return nome.lenght;
}

console.log(somar(10, 5));


console.log(letras('Diego'))

//----------------- padStart e padEnd

let cartao = '1239484930391234'

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16, '*');

console.log("Este é o seu cartão?" + cartao)