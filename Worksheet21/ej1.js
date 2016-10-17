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


function maximo(lis){
    return lis.sort()[lis.length-1];
}
function largo(lis){
    return lis.sort(function(a, b){return a.length-b.length})[lis.length-1];
}
/*a
window.onload = function(){
    var arra = [4,35,234,5,123,3,4,5,6,72,234,2];
    var ma = maximo(arra);
    document.getElementById('pio').innerHTML = ma;
}*/
window.onload = function(){
    var arra = ['asdf','qwerasgf','asd','qwergasbasdf'];
    var larg = largo(arra);
    document.getElementById('pio').innerHTML = larg;
}