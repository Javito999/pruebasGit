alert('Hola mundo2');

function usuario(){

let usuario = prompt("Introduzca su nombre");

if(usuario){
    confirm("El nombre es correcto");
    alert("Bienvenido");
}else{
    
    alert("No ha intorducido su nombre");
    alert("Maaaaaal");
}

}

function mostrarVariables(){

    let variable1 = 34;

    alert(variable1);

   let  variable3= 15.9;

   alert(variable1*variable3);

   variable3="Ahora soy un texto";

   alert(variable3);

   alert(variable3*35);

   let variable={variable1:34, variable3:variable3};

   alert(variable.variable3);


}

function comrpobarOperadores(){

let var1 ="cadenas";
let var2 = "de caracteres";
let var3 = 35;
let var4 = "525";
let var5 = 34;
let var6 = 56;
let var7 = !true;


alert(var1==var2);
alert(var1!=var2);
alert(var1<var2);
alert(var1>var2);
alert(var1<=var2);
alert(var1>=var2);

alert(var3==var4, var3===var4);

alert(var5<var6, var6>var7);

alert(var5<=var6, var6<=var7);

alert(var7);
}

function array(){

let array1 =[];

let numero = prompt("Introduzca un número");
let nombre = prompt("Intorduzca nombre");
let respuesta = prompt("Se va a añadir?");


if(respuesta==='si'){
    if(numero>=0){
       array1[numero].push(nombre); 
}else if(respuesta!=='si'){
        if(numero>=0){
        array1.splice(numero, 1); 
        }else if(numero<0){
            array1.splice(1,1);
        }else if(numero==isNaN){
            
        }
}    
}

console.log(array1);

}

function ejercicio8Apuntes(){

    let array =["ener","ferber",
    "marxo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre",
    "octubre", "noviembre", "diciembre"];

   for( i= 0; i < array.length; i++){
        alert(array[i]);
   }

  


}



function factorizarNumero(){

    let numero = prompt("Introduzca un numero");

    var result = numero;
    if (numero === 0 || numero === 1) 
      return 1; 
    while (numero > 1) { 
      numero--;
      result *= numero;
    }
    alert(result);
}

function netflix(){

    let edad = prompt("Introduzca su edad");

    edad = Number(edad);

    if(edad<6){
        alert("Patrulla canina")
    }else if(edad>=7 && edad<=13){
        alert("alexa y katie");
    }else if(edad>=13 && edad<=18){
        alert("Anne with E");
    }else if(edad>19){
        alert("Stgranger Things")
    }



}

function bucle(){

    let array = [100];
    
    

    for(var i = 0; i < array.length; i++){

        let numero = prompt("numero");
        array.push(numero);
        if(numero>=45 && numero<=72){
            break;
        }
    }
}

function color(){

    let array = [];
    
    let numVeces = 0;

    while(true){
       let color=prompt("escribe un color").toLowerCase();
        numVeces++;

        if(color === 'rojo'){
            break;
        }else if(color === 'verde'){
            continue;
        }else if(color){
            array.push(color);
        }

        alert(numVeces);
        alert(array[i]);

    }



}

function calculaPrecioFinal(precioArticulo, tipoIva){
    


    if(tipoIva === 'G'){
        return precioArticulo*0.21;

    }else if(tipoIva === 'R'){
        return precioArticulo*0.17;
    }else if(tipoIva === 'S'){
        return precioArticulo*0.8;
    }


}
function pagar(){

    let precioArticulo = prompt("Precio del artículo");
    let tipoIva = prompt("Introduzca tipo iva. G/R/S").toUpperCase();

    let precioFinal = calculaPrecioFinal(precioArticulo, tipoIva);

    alert(precioFinal);

}



