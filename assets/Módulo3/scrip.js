// DOM 
/*  document.getElementsBytagName("h1") -> retorna um array com todos h1
    document.getElementById("teste") -> retorna o elemento pelo ID, assim é possivel fazer modificações
    document.getElementsByClassName("botao") -> retorna todos elementos com a class
    document.querySelector("#botao") -> retorna o objeto assim como faz no css (retorna somente o primeiro)
    document.querySelectorAll -> retorna todos
    document.querySelectorAll("#teste ul li")
*/
function clicou(){
    console.log("Clicou no botao")  //pela tag(ONCLICK)
}

let botao = document.querySelector('.botao');
botao.addEventListener("click", clicou); //botao.addEventListener("click", () => {clicou();});
document.querySelector('.botao').addEventListener("click", clicou); // mesma coisa de cima
