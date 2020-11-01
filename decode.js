export function decode(offset, string) {

  if(offset === null || string === [] && offset === 0 || string === 0){
        throw new TypeError("Insira uma mensagem e um offset.")
    }


  let tamAlfabeto = 26
  let posicao1Letra = 65
  let posicaoDecodificada;
  let palavraConcatenada ="";

  for (let i = 0; i < string.length; i++) {

      posicaoDecodificada = ((string.charCodeAt(i) + posicao1Letra - offset) % tamAlfabeto) + posicao1Letra
      palavraConcatenada += String.fromCharCode(posicaoDecodificada);
  }

  return palavraConcatenada
}
