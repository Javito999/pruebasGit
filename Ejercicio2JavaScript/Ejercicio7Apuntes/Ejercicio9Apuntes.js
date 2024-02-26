function color(){

    var color = true;

    var array = [];

    let contador = 0;
      

    do{
        var respuesta = prompt("Introduzca un color");

        if(respuesta == "rojo"){
            color = false;
            contador++;

        }else if(respuesta == "verde"){
            continue;
            contador++;

         }else {
                contador ++;
                array.push(respuesta)
                continue;
         }




    }while(color)

    console.log(array);

    console.log("SE han introducido el color " + contador + " veces");
    
}