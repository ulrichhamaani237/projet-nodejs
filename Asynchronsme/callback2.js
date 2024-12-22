function somme(a,b) {
    return a + b;
}

function produit(a,b) {
    return a * b;
}

function operation(a,b, callback) {
    return callback(a,b)
}



console.log(operation(3,2,somme));
console.log(operation(3,2,produit));

console.log('====================================');
console.log("programme Principales");
console.log('====================================');

function perimetre(L,l) {
    return 2 * (L + l);
}
function gestion(a,b,callbacks){
    return callbacks(a,b)
}

console.log(gestion(4,5,perimetre));