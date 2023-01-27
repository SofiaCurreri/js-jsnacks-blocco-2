//Dato un array contenente i risultati di una squadra(vittorie, pareggi e sconfitte)
//[W, W, L, X, X, W, L, X], stampare a video il numero di vittorie,
// il numero di pareggi ed il numero di sconfitte.

const squadra = ["W", "W", "L", "X", "X", "W", "L", "X"];
let w = 0;
let x = 0;
let l = 0;

for (let i = 0; i < squadra.length; i++) {
    if (squadra[i] == "W") {
        w++;
    }
} else if (squadra[i] == "X") {
    x++;
} else {
    l++;
}

console.log("Numero vittorie: ", w);
console.log("Numero sconfitte: ", l);
console.log("Numero pareggi: ", x);