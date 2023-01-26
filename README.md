# Robotron-2023
>Este código é uma implementação de JavaScript que manipula elementos de uma página HTML

Ele começa declarando duas variáveis, "**controle**" e "**estatisticas**", que são usadas para selecionar elementos da página usando o método "**querySelectorAll**".
Esses elementos são usados para controlar a manipulação de dados da página. Depois foi declarado um objeto "**peças**", que contém informações das diferentes partes do robo.
```Javascript
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll('[data-estatistica')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
```

Em seguida, a variável "**controle**" é percorrida usando um loop "**forEach**", e um evento '**click**' é adicionado a cada elemento. Quando um elemento é clicado, a função "**manipulaDados**" é chamada com dois argumentos, "**operação**" e "**controle**", que são usados para manipular os dados na página. A função "**atualizaEstatisticas**" é chamada com um argumento "**peça**" que é usado para atualizar as estatísticas na página.

```Javascript
controle.forEach(  (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
} )

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]');
    
    if (operacao === "-") {
        peca.value = parseInt(peca.value) -1
    } else{
        peca.value = parseInt(peca.value) +1
    }}


function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    } )
}

```


A função "**manipulaDados**" verifica se o valor de "**operação**" é "-", e se for, subtrai 1 do contador de peças, caso contrário, adiciona 1.
A função "**atualizaEstatisticas**" percorre a variável "**estatisticas**" e atualiza o conteúdo de cada elemento com base nos valores contidos no objeto "**peças**".
