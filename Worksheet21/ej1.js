/*
1. Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario.
*/


function maximo(lis){
    return lis.sort()[lis.length-1];
}

window.onload = function(){
    var num1 = parseInt(prompt('introduce un numero'));
    var num2 = parseInt(prompt('introduce un numero'));
    var num3 = parseInt(prompt('introduce un numero'));
    var num4 = parseInt(prompt('introduce un numero'));
    var arra = [num1, num2, num3, num4];
    var ma = maximo(arra);
    document.getElementById('pio').innerHTML = ma;
}