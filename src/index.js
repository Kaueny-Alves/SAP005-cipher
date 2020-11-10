import cipher from './cipher.js';

const buttonCrip= document.getElementById("codificar")
buttonCrip.addEventListener("click", crip)

function crip(event) {
  event.preventDefault()
	let stringCrip = document.getElementById("stringCrip").value;
  let offsetCrip = parseInt(document.getElementById("offsetCrip").value);
  document.getElementById("mensagemCodificada").value = cipher.encode(offsetCrip, stringCrip);
}


const buttonDescrip= document.getElementById("decodificar")
buttonDescrip.addEventListener("click", descrip)

function descrip(event) {
    event.preventDefault()
	let stringDescrip = document.getElementById("stringDescrip").value;
  let offsetDescrip = parseInt(document.getElementById("offsetDescrip").value);
  document.getElementById("mensagemDecodificada").value = cipher.decode(offsetDescrip, stringDescrip);
}
