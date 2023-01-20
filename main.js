// buscar o id robotron e esperar o click e entao chamar a funcao dizOi 
const robotron =  document.querySelector("#robotron");

robotron.addEventListener("click", dizOi);//oque esperar/oque fazer

function dizOi () {//funcao que mostra a mensagem no console
    console.log('-- ROBO ATIVADO --')
}