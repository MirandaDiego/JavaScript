carro = "Ferari";console.log(carro); vanessa = 20; console.log(vanessa);
let nome= 'dilca';
bla= 'bla ${nome}';
let idade = 18;

  if (idade >=18 && idade < 60){
    console.log("você é um adulto")
  }
  let isMember =true
  let shipping = isMember ? 2 : 10;

console.log(isMember ? 'você émembro' : 'Você não é membro')
console.log("freste" + shipping)
function gravidade(){
    console.log('A gravidade do planeta é: 9.8')
    return 'A gravidade do planeta é 9.8'
    
}
gravidade()
resposta = gravidade()
//------------------------------
function maiorDeIdade(idade){
    if (idade >= 18){
        return true;
    }else{
        return false;
    }
}



let verificacao =maiorDeIdade(idade)

function porcentagem(x, y){
    let pct = (y/x) * 100
    return pct
}
let x =40
let y = 10;
let Pct = porcentagem(x, y)
console.log(`${Pct}% de ${x} é ${y}`)


function prcoImovel(metragem, quartos){
    m2 = 3000

    if(quartos == 1){
        valor = m2 *1
    }else if(quartos ==2){
        valor = m2 * 1.2
    }else if(quartos ==3){
        valor = m2 * 1.5

    }

    return valor
}

let metragem = 123
let quartos = 3
let preco = prcoImovel(metragem, quartos)
console.log(`A casa custa ${preco}`)



function addsquare(a, b){

function square(x){    // Ou: const square = (x) => x*x
    return x * x;
}

    return square(a) + square(b)
}

console.log(addsquare(2, 3))
