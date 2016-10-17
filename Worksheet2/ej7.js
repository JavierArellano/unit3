/*
7. Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.
*/
var arr = [0,1,2,3,4,5,6,7,8,9];

function ponCero(arra){
    for (i=0;i<arra.length;i++){
        arra[i] = 0;
    }
}
function masUno(arra){
    for (i=0;i<arra.length;i++){
        arra[i] += 1;
    }
}
function mostrar(arra){
    for (i=0;i<arra.length;i++){
        document.write(arra[i] + ' ');
    }
}

document.write(ponCero(arr));
document.write(masUno(arr));
mostrar(arr);