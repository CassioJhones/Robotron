// buscar o id robotron e esperar o click e entao chamar a funcao dizOi 
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

somar.addEventListener("click",  (evento) => {
    braco.value = parseInt(braco.value) +1
});

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) -1
})

// function (){} anonima pode ser escrita  como () =>{ }

// addEventListener precisa dos parametros (oque esperar, oque fazer)