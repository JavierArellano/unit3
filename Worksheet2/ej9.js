/*
8. Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
9. Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
bidimensionales).
*/
var resultados = [0,0,0,0,0,0,0,0,0,0,0]
function lanzar(){
    let aleat = Math.floor((Math.random()*6) + 1);
    return aleat;
}
function result(){
    let dado1 = lanzar();
    let dado2 = lanzar();
    let res = dado1 + dado2;
    return res;
}
function simulacion(){
    for (i=0;i<36000;i++){
        resultados[result()-2] += 1;
    }
}
function imprimir(){
    for (i=0;i<11;i++){
        document.write((2+i) +':'+ resultados[i] + '<br>');
    }
}

window.onload = function(){
    simulacion();
    imprimir();
}