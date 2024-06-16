function crearLista(){

    let array = ["Uno", "Dos", "Tres"];

    let ol = document.createElement("ol");

    for(let i = 0; i < array.length; i++){
            let li = document.createElement("li");
            li.innerText = array[i];
           ol.appendChild(li);

    }

    document.body.appendChild(ol);
}

function cambiarElemento(){

    let ol = document.getElementsByTagName("ol")[0];

    let elemento4 = document.createElement("li");
    elemento4.innerText = "Cuatro";

    let cambioElemento = document.getElementsByTagName("li")[2];

    ol.replaceChild(elemento4, cambioElemento);



}

function anhadirHijo(){

    let ol = document.getElementsByTagName("ol");

    let textoAnhadido = document.getElementsByTagName("li")[2];
        let texto = document.createElement("p");
        texto.innerText= "Hijo de cuatro";

    textoAnhadido.appendChild(texto);


}

function cambiarTitulo(){

    let encabezado = document.getElementById("encabezado1");

    let cambioEncabezado = document.getElementsByTagName("h1");
    let texto = document.createElement("h1");
    texto.innerText = "He creado una lista";

    encabezado.replaceWith(texto);
}

function funcion1(){

    let encabezado = document.getElementsByTagName("h1");
    let ol = document.getElementsByTagName("ol");

    document.getElementById("encabezado1").style.color = "red";
    document.getElementsByTagName("ol").style.backgroundcolor = "yellow";
    

    


}





    

