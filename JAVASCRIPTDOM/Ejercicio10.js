function calcularPrecioFinal(precio, iva) {

    let precioFinal = 0;

    switch(iva) {

        case "G":
            precioFinal = precio*1.21;
        break;
        case "R":
            precioFinal = precio*1.10;
        break;

        case "S":
            precioFinal = precio*1.04;
        break;
    }

    return precioFinal;
}

console.log(calcularPrecioFinal(100, "S"));


function pagar(){

        let precio = Number (prompt("Introduzca el precio del producto"));
        let iva = prompt("introduzca el tipo de iva a aplicar");



    let precioFinal2 = calcularPrecioFinal(precio, iva);

    alert ("precioFinal " + precioFinal2);



}