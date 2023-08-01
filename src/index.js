import cipher from './cipher.js';

//Botón para codificar
document.getElementById("encodeButton").addEventListener("click", function()
{
  const mensaje = document.getElementById("Message").value.toUpperCase(); //Convierte el mensaje a mayúsculas 
  const offset = document.getElementById("offset").value; //Valor de desplazamiento
      
  document.getElementById("mensajeCifrado").value = cipher.encode(offset, mensaje); //Valor del mensaje codificado
});

//Botón para decodificar
document.getElementById("decodeButton").addEventListener("click", function()
{
  const mensaje = document.getElementById("Message").value.toUpperCase(); //Convierte el mensaje a mayúsculas
  const offset = document.getElementById("offset").value; //Valor de desplazamiento
     
  document.getElementById("mensajeCifrado").value = cipher.decode(offset, mensaje); //Valor del mensaje decodificado
});

  
