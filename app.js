function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);  //parseInt retorna um número inteiro. "getElementById" busca um elemento HTML pelo código "id"
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    console.log(`Sortear ${quantidade} número(s) entre ${de} e ${ate}.`);

                                                                            // console.log(`Número sorteado: ${numero}.`);

   let sorteados = [];
   let numero;

   for (let i = 0; i < quantidade; i++){                                    //for = para/faça
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {                                    //includes verifica se um valor está contido no array. Retorna booleano (true ou false)
        numero  = obterNumeroAleatorio(de, ate);                            //while (enquanto)
    }

    sorteados.push(numero);                                                 //push inclui um elemento no array
   }

   console.log(`Número(s) sorteado(s): ${sorteados}.`);

   let resultado = document.getElementById("resultado");
   
   if (sorteados != '') {
     alterarStatusBotao();
     resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
   }

}

function obterNumeroAleatorio(min, max) {                                   //a função abaixo foi introduzida de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;               //math.random() retorna um número aleatório (decimal por padrão, entre 0 inclusivo e 1 exclusivo)
                                                                            //math.floor(x) retorna o menor número inteiro dentre o número "x".
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    let botaoS = document.getElementById("btn-sortear");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botaoS.classList.remove('container__botao');
        botaoS.classList.add('container__botao-desabilitado');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botaoS.classList.remove('container__botao-desabilitado');
        botaoS.classList.add('container__botao');
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

