import cipher from "../cipher.js"

export function crip(){
  //event.preventDefault()
 const string =  document.getElementById("codificar")
   console.log(string)
 const  offset = document.getElementById("offset")
  console.log(offset)

    const cod = cipher.encode()
    console.log(cod)

   return document.getElementById("decodificar").innerHTML = `${cod}`

  }
