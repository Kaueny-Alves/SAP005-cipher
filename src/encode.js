

export function encode(offset, string) {

  if(offset === null || string === [] && offset === 0 || string === 0){
    throw new TypeError("Insira uma mensagem e um offset.")
}

  let tamAlfabeto = 26
  let posicao1Letra = 65
  let posicaoCodificada;
  let palavraConcatenada ="";

  for (let i = 0; i < string.length; i++) {

      posicaoCodificada = (((string.charCodeAt(i)) - posicao1Letra + offset ) % tamAlfabeto) + posicao1Letra
      palavraConcatenada += String.fromCharCode(posicaoCodificada);
  }

  return palavraConcatenada

  }



