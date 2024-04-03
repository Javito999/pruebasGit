function actualizarTextoComoActuar(){

    let divComoActuar = document.getElementById("divComoActuar").cheked;
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