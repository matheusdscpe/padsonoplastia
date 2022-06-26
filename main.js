function tocaSom(elemento){
    document.querySelector(elemento).play();
}
const lista = document.querySelectorAll('.tecla');


for(let i=0;i<lista.length;i++){
    let numero = lista[i].classList[1];
    console.log(numero)
    let idAudio = `#som_${numero}`
    console.log(lista[i])
    lista[i].onclick = function(){
        tocaSom(idAudio);
    }

}