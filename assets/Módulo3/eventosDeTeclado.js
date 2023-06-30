function apertou(){
    console.log("apertou")
}
function segurou(){
    console.log("segurou")
}
function soltou(e){
    console.log("soltou")
    console.log(e)

}
function clicou(){
    document.getElementById("titulo").innerHTML = "Obrigado";
}
const input = document.querySelector('input')
document.addEventListener('keyup', soltou)

function digitou(ed){
    console.log(ed)
    if(e.keycode == 13){  //13 -> tecla enter
        let texto = document.getElementById("campo").value;  // PEga tudo que foi digitado antes da tecla enter

        console.log(texto);
    } 
}