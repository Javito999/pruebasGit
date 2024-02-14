function crearArray(){
   let arrayPrueba = [];

   do{
    var num =parseInt(prompt("Introduzca un numero")) ;
   
    if(! isNaN(num)) {
        let nombre = prompt("Introduzca un nombre");
        if(confirm("desea almacenar el nombre?")) {
                if( num>= 0){
                    arrayPrueba[num] = nombre;
                }else{
                    arrayPrueba.push(nombre);
                }
                    
            }else {
                if(num >= 0 ) {
                    arrayPrueba[num] = "";
                }else {
                    arrayPrueba[0] = "";
                }
            }
            console.log(arrayPrueba);
        }
    

   }while(! isNaN(num));
}

crearArray();