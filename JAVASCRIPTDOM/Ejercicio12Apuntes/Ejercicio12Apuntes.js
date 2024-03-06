function crearLista(){

    let datos = ["Uno", "Dos", "Tres"];

    let lista = document.createElement("ol");

    for(let index = 0; index < datos.length; index++){
            let elementoLista = document.createElement("li");
            elementoLista.innerText = datos[index];
            lista.appendChild(elementoLista);

    }

    document.body.appendChild(lista);
}

function mostrarElemento(){

    console.log(document);

    let encabezado = document.getElementById("encabezado1");
    console.log(encabezado);

    let lista = document.getElementsByTagName("ol");
    console.log(lista);


}

function cambiarElemento(){
    let lista = document.getElementsByTagName("ol")[0];   
let elemento4 = document.createElement("li");
elemento4.innerText = "Cuatro";

let cambioListaElemento = document.getElementsByTagName("li")[2];

lista.replaceChild(elemento4, cambioListaElemento);
}

function añadirHijo(){
     
    let lista = document.getElementsByTagName("ol"); 
    let cambioListaElemento = document.getElementsByTagName("li")[2];
     let hijo = document.createElement("p");
     hijo.innerText = "Hijo de cuatro";
     cambioListaElemento.appendChild(hijo);
}



    
function boton1(){

    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.classList.add('efectosboton1');

    let lista = document.getElementsByTagName("ol")[0]; 
    let cambioListaElemento = document.getElementsByTagName("li");

    for(let index = 0; index < lista.length; index++){
        lista[index].classList.add("efectosboton1a");
    }

    let titulo = document.getElementById("encabezado1");
    titulo.setAttribute("class", "efectoParrafo");
    
    }

    function boton2(){

        let parrafo = document.getElementsByTagName("p")[0];
        parrafo.classList.add('efectoboton2p');
        let lista = document.getElementsByTagName("ol")[0];
        lista.classList.add('efectoboton2');
        let elementosLista = document.getElementsByTagName("li");
        for (let index = 0; index < elementosLista.length; index++) {
            elementosLista[index].classList.add('efectoBoton2li');
            
        }
    
        elementosLista.classList.add('efectoboton2li');

        let titulo = document.getElementById("encabezado1");
        titulo.classList.add("efectosombraboton2");

}

function boton3(){



}
  

