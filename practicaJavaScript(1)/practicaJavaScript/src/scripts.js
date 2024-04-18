function actualizarTextoComoActuar(){

    let divComoActuar = document.getElementById("divComoActuar").checked;
    let checkFiebre = document.getElementById("fiebre").checked;
    let checkTos = document.getElementById("tos").checked;
    let checkRespirar = document.getElementById("respirar").checked;
    let checkGrave = document.getElementById("grave").checked;
    divComoActuar.setAttributte("class", "estiloTextoAzulNegrita");


    if ((checkFiebre || checkTos) && (checkRespirar || checkGrave)){
        divComoActuar.innerText = "LLama al tefno 112";


    }else if ((checkFiebre || checkTos)){

        divComoActuar.innerText = "Quédate en casa";
    }else {
        divComoActuar.innerText  = "";
    }

}



function espacioH2(){
    let divParaTodos = document.getElementById("paraTodos");

    let encabezadoH2 = document.createElement("h2");

    divParaTodos.appendChild(encabezadoH2);

    encabezadoH2.innerText= "Como puedo protegerme?"

    encabezadoH2.setAttribute("onmouseover", "completarTexto()");
    
     encabezadoH2.setAttribute("onmouseout", "eliminarTexto()" )
   



} 
function completarTexto(){
let divParaTodos = document.getElementById("paraTodos");

let parrafo1 = document.createElement("p");
parrafo1.innerText = "lávate las manos"

let parrafo2 = document.createElement("p");
parrafo2.innerText = "lávate las manos rapidamente"

let parrafo3 = document.createElement("p");
parrafo3.innerText = "Evita tocarte los ojos"

let encabezado2 = document.getElementsByTagName("h2")[0];
encabezado2.setAttribute("class", "estiloTextoAzulNegrita")

    divParaTodos.appendChild(parrafo1);
    divParaTodos.appendChild(parrafo2);
    divParaTodos.appendChild(parrafo3);
}

function eliminarTexto(){
    let divParaTodos = document.getElementById("paraTodos");
    let encabezado2 = document.getElementsByTagName("h2")[0];

    let parrafosHijosDiv = divParaTodos.getElementsByTagName("p");


    divParaTodos.removeChild(parrafosHijosDiv[2]);
    divParaTodos.removeChild(parrafosHijosDiv[1]);
    divParaTodos.removeChild(parrafosHijosDiv[0]);
    
    encabezado2.removeAttribute("class");
}