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

const input = document.querySelector('input')
document.addEventListener('keyup', soltou)