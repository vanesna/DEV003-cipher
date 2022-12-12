const cipher = {

  //encode
  encode: function(offset, mensaje) //Función con argumentos mensaje y desplazamiento
  {
    if (offset <= 0 && mensaje !== 'string'){
      throw new TypeError();
    }

    let resultado = "";
     
    for (let i = 0; i < mensaje.length; i++)
    {
      const character = mensaje.charCodeAt(i);
      let encode;

      if(character === 32)
      {
        encode = String.fromCharCode(character);
      }

      else{
        const numberEncode = ((character - 65 + parseInt(offset)) %26) + 65; //parseInt convierte de cadena a entero
        encode = String.fromCharCode(numberEncode); //Devuelve una cadena
      }
      
      resultado = resultado + encode;
    }
  
      
    return resultado;  
  },     

  //decode
  decode: function (offset, mensaje)
  {
    if(offset <= 0 && mensaje !== "string"){
      throw new TypeError();
    }
    

    let resultado = "";
     
    for (let i = 0; i < mensaje.length; i++)
    {
      let decode;
      const character = mensaje.charCodeAt(i);
      
      if(character === 32){
        decode = String.fromCharCode(character);
      }

      else{
        const numberEncode = ((character - 90 - parseInt(offset)) %26) +90;
        decode = String.fromCharCode(numberEncode);
      }

      resultado = resultado + decode;
    }

    return resultado;  

  } 

}; 


export default cipher;



































/* 
       ----------------
       
       encode: function(offsetCifrar, originalText){
     if (offsetCifrar <= 0 && typeof originalText != "string") {
       throw new TypeError();
     }

     let textEncode = '';
               
    
     for (let i = 0; i < originalText.length; i++) {
      
       const numberByCharacter = originalText.charCodeAt(i);
       
       if (numberByCharacter >= 65 && numberByCharacter <=90) {
         const textWithNumberEncode = ((numberByCharacter - 65 + parseInt(offsetCifrar)) % 26 ) + 65;
         const textWithLetterEncode = String.fromCharCode(textWithNumberEncode);
         textEncode += textWithLetterEncode;
       } else if (numberByCharacter >= 97 && numberByCharacter <=122) {
         const textWithNumberEncode = ((numberByCharacter - 97 + parseInt(offsetCifrar)) % 26) + 97;
         const textWithLetterEncode = String.fromCharCode(textWithNumberEncode);
         textEncode += textWithLetterEncode;

       } else {
         textEncode += String.fromCharCode(numberByCharacter);
         }  
         
     }
         
        

   return textEncode;
          

   }, */