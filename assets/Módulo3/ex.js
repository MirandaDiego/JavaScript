//Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

//funçoes
function handleKeyUp(e){
    if(e.key === 'Enter'){
        /*Primeiro Jeito: 
        lista.innerHTML += '<li> '+ input.value + '</li>';
        */
       
       const newLi = document.createElement('li')
       newLi.innerHTML = input.value;
       lista.appendChild(newLi);

       input.value = '';

    }
}

//Eventos
input.addEventListener('keyup', handleKeyUp);
 