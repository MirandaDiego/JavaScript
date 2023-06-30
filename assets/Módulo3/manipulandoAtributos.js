function clicou(){
    const input = document.querySelector('input');

    console.log(input.getAttribute('placeholder'));

    //hasAttribute -> usado para saber se à o atributo(retorna um boolean)
    if(input.hasAttribute('placeholder')){
        console.log('Tem placeholder');
    }else{
        console.log("Não tem placeholder...");
    }

    //setAttribute -> adiciona, e se ja tiver, subistitui o elemento

    input.setAttribute('placeholder',  'Placeholder alterado')

    //selecionando o botao para mexer nele:
    const botao = document.querySelector('.botao')

    
    input.setAttribute('type', 'text') //-> muda o tipo para texto assim q clica(mostra a senha no caso)

    //verificacao de senha na tela (se esta texto muda para password e vice-versa): 
    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
       botao.innerText = "Mostrar senha"
    }else{
        input.setAttribute('type', 'text')
        botao.innerText = "Ocultar a senha"
    }

}   
