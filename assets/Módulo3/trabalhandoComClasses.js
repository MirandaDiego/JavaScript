function clicou(){
    const button= document.querySelector('button');
    console.log(button.classList) //printar todas as  classes do obj 

    button.classList.add('Verde'); // adicionando uma classe no obj
    button.classList.remove('Verde');


    // verificar se à uma classe: 

    if(button.classList.contains('azul')){
        button.classList.remove('Verde');
        button.classList.add('Verde'); 
    }else{
        button.classList.add('azul');
        button.classList.remove('verde');
    }
    //simplificando:

    button.classList.toggle('Azul')
}