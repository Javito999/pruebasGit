
    alert("Hola Mundo 2!");

    function pedirNombre(){

   let nombre =  prompt("Intorduzca su nombre");
  
   if(nombre == "" || nombre ==null){
console.error("No ha introducido nombre");
alert("no ha introducido el nombre")
   }else{
   let confirma =  confirm("es este su nombre?" + nombre);
    if(confirma){

        console.log("El nombre es correcto");
        alert("Bienvenido");
    }else{
        console.warn("NO se sabe su nombre");
    }
   }
}

function mostrarVariables(){

    alert("variable1" + variable);
    variable2 = null;
    alert(variable2);
    let variable1 = 34;
    let variable3 = 15.9;
    alert(variable1*variable3);
    variable3 = "ahora soy un texto";
    alert(variable3 * 35);
    var ejemplo = {id:5};
    ejemplo.id;
}