function nombre(){

let nombre = prompt("Introduzca su nombre");

let muesta = alert("Bienvenido a la casa")

}

function pedirEdad(){


    let edad = prompt("Introduzca su edad");

    if(edad >= 18){

        confirm("Eres mayor de edad")

    }else{

        confirm("Eres menor de edad")
    }


}

function pedirNumeros(){

    let num1 = parseFloat(prompt("Introduzca el primer número"));

    let num2 = parseFloat(prompt("Introduzca el segundo número"));

    let suma = num1 + num2;

    console.log(parseInt(suma));



}
/* ejercicio 4, con el push se mete el nombre al final del array*/

function nombresArray(){

    var variables = new Array ("carlitos","franki", "vicen");

    let nombre = prompt("Introduzca un nuevo nombre");

    variables.push(nombre);
    console.log(variables);

}

/* Ejercicio 5 */

function numerosArray(){

    var letrasYNumeros = [];

    


    do{
        var consola = parseInt(prompt("Introduzca un número"));

        if(!isNaN(consola)){

            letrasYNumeros[consola] = consola;

        }else{

            console.log(letrasYNumeros);
            break;
        }
        




    }while(isNaN);



}


