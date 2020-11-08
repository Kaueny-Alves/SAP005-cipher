
 const cipher = {

 encode(offset, string) {

    if(offset === null || string === [] && offset === 0 || string === 0){
      throw new TypeError()
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

    },

     decode(offset, string) {

      if(offset === null || string === [] && offset === 0 || string === 0){
            throw new TypeError()
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
    },

};





 export default cipher;


