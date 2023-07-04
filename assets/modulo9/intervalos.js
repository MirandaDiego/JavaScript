let timer;

function comecar(){
  timer = setInterval(showTime, 1000);  //funçaõ desejada, tempo de intervelo de execuçao( em milisegundos)

}
function parar(){
    clearInterval(timer);

}

function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h + ':' + m + ':' + s;

    document.querySelector('.demo').innerHTML = txt;

        
}

//-----------------------------------------------------------------

function rodar(){
    setTimeout(function(){                  // funciona depois de um tempo programado
       document.querySelector('.demo').innerHTML = 'Rodou';
}, 2000);


}