
// parte 1 del ejercicio
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
   for (i in meses){
        console.log(meses[i]);
   }

   //parte 2 del ejercicio

   var numero = parseInt(prompt("Introduzca un número"));

        let recorrido = 1;

        for(let i = numero; i > 0; i --){
            recorrido *= i;

        }
console.log(recorrido);

//parte 3 del ejercicio

var edad = parseInt(prompt("Introduzca un número"));

if(edad < 6){
    console.log("Patrulla canina");
}else if(edad >= 7 && edad <= 13){
    console.log("Alexa and Katie");

}else if(edad >= 13 && edad <= 18){
    console.log("Anne with an E");

}else if (edad >=19 && edad <= 35){
    console.log("Stranger Things");

    }else {

        console.log("Sherlock");
    }

    // parte 4 del ejecicio 8 de los apuntes

    let contador;

    do{

        contador=parseInt(prompt("Introduzca un número"));

    }while(contador>= 45 && contador <=72);
    
    // esta segunda solución de la parte 4 del ejercicio es la que funciona
    let salida = true;
    do{
        var respuesta = parseInt(prompt("Introduzca un número"));
        if(respuesta>= 45 && respuesta <= 72){
            salida=false;
        }
    }while(salida);
