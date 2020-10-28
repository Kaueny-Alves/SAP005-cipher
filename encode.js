

export function encode(offset, string) {

  // if(offset === null ||  letras === [] ){
  //  throw TypeError()
  // }

  offset = parseInt(document.getElementById("offset").value)
  string = document.getElementById("codificar").value

  let posicaoCodificada;
  let palavraConcatenada ="";

  for (let i = 0; i < string.length; i++) {


      posicaoCodificada = (((string.charCodeAt(i)) - 65 + offset ) % 26) + 65

      palavraConcatenada += String.fromCharCode(posicaoCodificada);

  }

  return document.getElementById("decodificar").innerHTML= `${palavraConcatenada}`
  }




