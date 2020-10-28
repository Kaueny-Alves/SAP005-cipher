export function decode(offset,string) {

  let posicaoDecodificada;
  let palavraConcatenada ="";
  let validacao;

  for (let i = 0; i < string.length; i++) {

      validacao = string.charCodeAt(i) - 65 - offset

      if (validacao >= 0 ){
          posicaoDecodificada = (((string.charCodeAt(i)) - 65 - offset ) % 26) + 65;

      }else {
          posicaoDecodificada = string.charCodeAt(i)  - offset + 26
      }

      palavraConcatenada += String.fromCharCode(posicaoDecodificada);

  }

  return palavraConcatenada
}





