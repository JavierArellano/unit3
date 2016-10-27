/*
Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):

a) find largest number

b) find longest string

c) find even numbers (pares)

d) find odd numbers (impares)

e) find words that contain 'is'

f) assert all numbers are divisible by three

g)  zip two arrays together

h) sort joined array from smallest to largest

i) remove the first word in the array

j) place a new word at the start of the array

k) replace some elements

l) Over an array with names, find all entries whose firstname starts with 'J',  create projection combined of only the initials of the name and then sort alphabetically
*/

/*a
function maximo(lis){
    return lis.sort()[lis.length-1];
}
window.onload = function(){
    var arra = [4,35,234,5,123,3,4,5,6,72,234,2];
    var ma = maximo(arra);
    document.getElementById('pio').innerHTML = ma;
}*/
/*b
function largo(lis){
    return lis.sort(function(a, b){return a.length-b.length})[lis.length-1];
}
window.onload = function(){
    var arra = ['asdf','qwerasgf','asd','qwergasbasdf'];
    var larg = largo(arra);
    document.getElementById('pio').innerHTML = larg;
}*/
/*c
function checkPar(par){
    return par%2 == 0;
}
function pares(lis){
    var parli = lis.filter(checkPar);
    return parli;
}
window.onload = function(){
    var arra = [4,35,234,5,123,3,4,5,6,72,234,2];
    var lispar = pares(arra);
    for (par of lispar){
        document.write(par + '<br>');
    }
}*/
/*d
function checkImpar(impar){
    return impar%2 == 1;
}
function impares(lis){
    var imparli = lis.filter(checkImpar);
    return imparli;
}
window.onload = function(){
    var arra = [4,35,234,5,123,3,4,5,6,72,234,2];
    var lisimpar = impares(arra);
    for (impar of lisimpar){
        document.write(impar + '<br>');
    }
}*/
/*e
function checkIs(palab){
    return palab.includes('is');
}
function contieneIs(lis){
    var liIs = lis.filter(checkIs);
    return liIs
}
window.onload = function(){
    var arra = ['asdf','qweraisgf','asd','qwergasbasdf','asdfisfaggsd'];
    var lisIs = contieneIs(arra);
    for (elem of lisIs){
        document.write(elem + '<br>');
    }
}*/
/*f
function divTres(lis){
    var cumple = lis.every(function(n){
        return n%3 === 0;
    })
    return cumple;
}
window.onload = function(){
    var arra = [3,6,9,12,15,18,21,24];
    var divi = divTres(arra)
    document.write(divi);
}*/
/*gh
function unir(lis1,lis2){
    return lis1.concat(lis2);
}
function ordenar(lis1,lis2){
    var unida = unir(lis1,lis2)
    return unida.sort(function(a, b){
        return a.length-b.length;
    });
}
window.onload = function(){
    var arra = ['asdf','qwerasgf','asd','qwergasbasdf'];
    var arr = ['asdff','qwerasfzv'];
    var ordenada = ordenar(arra,arr);
    document.getElementById('pio').innerHTML = ordenada;
}*/
/*i
function sacarPrim(lis){
    lis.shift();
    return lis;
}
window.onload = function(){
    var arra = ['asdf','qwerasgf','asd','qwergasbasdf'];
    var sinPrim = sacarPrim(arra);
    document.getElementById('pio').innerHTML = sinPrim;
}*/
/*j
function meterPrim(lis, n='hola'){
    lis.unshift(n);
    return lis;
}
window.onload = function(){
    var arra = ['asdf','qwerasgf','asd','qwergasbasdf'];
    var masPrim = meterPrim(arra);
    document.getElementById('pio').innerHTML = masPrim;
}*/
/*k
function reemplazar(lis,indice,nuevo){
//array.splice(index,howmany,item1,.....,itemX)
    lis.splice(indice,1,nuevo);
    return lis;
}
window.onload = function(){
    var arra = ['asdf','qwerasgf','asd','qwergasbasdf'];
    var nueva = 'pepe';
    var reem = reemplazar(arra,1,nueva);
    document.getElementById('pio').innerHTML = reem;
}*/

function buscaNombre(lista){
    var li = lista.map(algo);
    li.sort();
    return li;
}
function checkJ(nomb){
    return nomb.includes('J');
}
function algo(nombre){
    var lista = []
    if (checkJ(nombre[0])){
        var contenido = 'J' + nombre[1][0];
        lista.unshift(contenido);
        return lista;
    }
}




window.onload = function(){
    var nombres = [['Pepe','Perez'],['Alfredo','Jimenez'],['Lucas','Rodriguez'],['Jose','Sanchez'],['Alva','Jeronimo'],['Juan','Palomo'],['Javi','Arellano']];
    
    var reem = buscaNombre(nombres);
    for (elem of reem){
        if (elem != undefined){
        document.write(elem + '<br>');
        }
    }
}
































