// buscar o id robotron e esperar o click e entao chamar a funcao dizOi 
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach(  (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent)
    })
} )

function manipulaDados(operacao){
    if (operacao === "-") {
        braco.value = parseInt(braco.value) -1
    } else{
        braco.value = parseInt(braco.value) +1
    }}

// function (){} anonima pode ser escrita  como () =>{ }

// addEventListener precisa dos parametros (oque esperar, oque fazer)