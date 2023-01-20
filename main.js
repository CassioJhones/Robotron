// buscar o id robotron e esperar o click e entao chamar a funcao dizOi 
const robotron =  document.querySelector("#robotron");

robotron.addEventListener("click", function () {
    console.log('-- ATIVAÇÃO CONCLUIDA --')
    
});//oque esperar/oque fazer

function dizOi () {//funcao que mostra a mensagem no console
    console.log('-- ROBO DESATIVADO --')
    console.log('-- Faça a ativação --')
}

dizOi();



// function (){} anonima pode ser escrita  como () =>{ }