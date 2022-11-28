let palavraSecretaSorteada;
let categoriaSorteda;
let listaDinamica = [];
let tentativas = 6;
import palavras from './palavras.json' assert { type: 'json' };

criaPalavra(palavras);
function criaPalavra(palavrasJson) {
  const index = Math.floor(Math.random() * palavrasJson.length);

  categoriaSorteda = palavrasJson[index].categoria;
  palavraSecretaSorteada = palavrasJson[index].palavra.toLowerCase()     ;
}


function montaPalavraNaTela() {
  const categoria = document.getElementById('categoria');
  categoria.innerHTML = categoriaSorteda;

  const palavraTela = document.querySelector('.palavra');
  palavraTela.innerHTML = '';
 
}

let teclado = document.querySelector('.teclado')
console.log(teclado)
teclado.addEventListener("click", function(e){
  let letra = e.target.value.toLowerCase();
  verificaLetra(letra);  
})

function verificaLetra(letra){ 

  if(tentativas > 0){
    compararLista(letra);
    montaPalavraNaTela();
  }
}


function compararLista(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra)
  if(pos < 0 ){

  }
  console.log(letra)   
  console.log(palavraSecretaSorteada)
  console.log(pos)
}



/* jogo();
async function jogo() { 
  let categoriaSorteda;
  let palavraSorteada;

  //Busca a palavra no arquivo palavras.json
  await fetch('palavras.json')
    .then((resposta) => resposta.json())
    .then((json) => criaPalavra(json));

  function criaPalavra(palavrasJson) {
    const index = Math.floor(Math.random() * palavrasJson.length);

    categoriaSorteda = palavrasJson[index].categoria;
    palavraSorteada = palavrasJson[index].palavra;
  }

  montaPalavraNaTela();
  function montaPalavraNaTela() {
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = categoriaSorteda;
  }
} */
