/*function clicou(){
    const teste = document.querySelector("#teste");
    console.log(teste.children)
    const ul = teste.querySelector("ul");

    ul.innerHTML = "<li>Item alterado<\li>"
    ul.children[1].innerHTML = "Item alterado também"
    console.log(ul.outerHTML); 
    ul.outerHTML = '<strong>Alterado<\strong>'
} */

function clicou(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

   /* ul.children[0].append(" Alterado")
    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";
    ul.appendChild(newLi)  */

    ul.innerHTML += "<li>Item adicionados</li>"
    ul.appendChild(newLi); //forma correta para adicionar item ao elemento
    ul.prepend(newLi)


    /* 
    APPEND - adiciona na lista
    PREPEND - adiciona no começo da lista
    */

//----------------------------------------- manipulando elementos 3
    
    const newButton = document.createElement("button"); // criando o botao
    newButton.innerHTML = "Botão"; // criando o botao

    ul.before(newButton); // adicionando o botao novo 

    ul.after("texto qualquer")
    ul.before("texto qualquer")


    let newUl = document.createElement("ul");
    

    for(let i =0; i<5; i++){
        let newLi = document.createElement("li");
        newLi.innerHTML = "Itemadd" + i;
        newUl.append(newLi);

    }


}