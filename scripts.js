function validaArray (arr, num){
   try{
    if(!arr && !num) throw new ReferenceError("Envie os parametros");

    if(typeof arr!== 'object') throw new TypeError("Array precisa ser do tipo Object");

    if(typeof num!== 'number') throw new TypeError("Num precisa ser do tipo Number");

    if(arr.length !== num) throw new RangeError("Tamanho Invalido");

    return arr;
   }

   catch(e){
       if(e instanceof ReferenceError){
           console.log("Reference Error");
           console.log(e.message);
       } else if (e instanceof TypeError){
           console.log("TypeError");
           console.log(e.message);
       } else if (e instanceof RangeError){
           console.log("RangeError");
           console.log(e.message);
       } else {
           console.log("Erro nao esperado:" + e);
       }
   }
}

console.log(validaArray());