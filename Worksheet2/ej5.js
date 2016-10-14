/*
Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
*/

function ale(){
    let aleat = Math.floor((Math.random()*1001) + 1);
    return aleat;
}

function orde(list){
    list.sort(function(a,b){
        return a%2 - b%2 || a - b;
    })
}

function paresImpares(){
    let arra = new Array(100);
    for (i=0,i>100,i++){
        arra.push(ale())};
    orde(arra);
}

