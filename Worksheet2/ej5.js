/*
Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
*/

function ale(){
    let aleat = Math.floor((Math.random()*1001) + 1);
    return aleat;
}

function orde(lista){
    lista.sort(function(a,b){
        return a%2 - b%2 || a - b;
    })
    return lista;
}

function paresImpares(){
    let arra = new Array(100);
    for (i=0;i<100;i++){
        arra[i] = ale()};
    let listaOrdenada = orde(arra);
    imprimir(listaOrdenada);
}

function imprimir(lista){
    for (numero of lista){
        document.write(numero + '<br>');
        /*let po = document.getElementById('pio');
        po.innerHTML = numero;*/
    }
}

window.onload = paresImpares();