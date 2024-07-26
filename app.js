function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    console.log(`Sortear ${quantidade} número(s) entre ${de} e ${ate}.`);

   // console.log(`Número sorteado: ${numero}.`);

   let sorteados = [];
   let numero;

   for (let i = 0; i < quantidade; i++){
    numero = obterNumeroAleatorio(de, ate);
    sorteados.push(numero);
   }

   console.log(`Número sorteado: ${sorteados}.`);

}

function obterNumeroAleatorio(min, max) { //a função abaixo foi introduzida de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
      

}
