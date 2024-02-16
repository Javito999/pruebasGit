function crearArray(){

    let array = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];

    array.splice(1,1);

    console.log(array);

    array.splice(2,0, "hilo torzal");

    array.splice(3,1, "cuter rotatorio", "mesa de corte");
    //primero incluya loa tres primeros elementos del original
    let nuevaArray = array.slice(0,3);
    console.log(nuevaArray);

    //el segundo del cuarto al sexto

    let nuevaArray1 = array.slice(3,6);
    console.log(nuevaArray1);

    





    


}