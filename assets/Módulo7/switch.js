let dia = 3;
let diaNome = ''

switch(dia) {
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sábado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
/*  case 6:
    case 7:
        diaNome = 'FInais de semana' */
    default:
        diaNome='Náo existe esse dia'

}

document.getElementById("dia").innerHTML = "Hoje é: " + diaNome;
