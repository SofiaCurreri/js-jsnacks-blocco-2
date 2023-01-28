//Crea due array che hanno un numero di elementi diversi. 
//Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let lista1 = [2, 188, 13, 29, 85, 36, 201, 7, 91];
let lista2 = [4, 82, 67, 14, 23];

let diffLunghezza;
const stampa = document.getElementById("lista");

if (((lista1.length % 2 == 0) && (lista2.length % 2 == 0)) || ((lista1.length % 2 != 0) && (lista2.length % 2 != 0))) {
    if (lista1.length > lista2.length) {
        diffLunghezza = lista1.length - lista2.length;
        let contatore = diffLunghezza / 2;
        for (let i = 0; i < contatore; i++) {
            lista2.push(lista1[lista1.length - 1]);
            lista1.pop();
        }
    } else {
        diffLunghezza = lista2.length - lista1.length;
        let contatore = diffLunghezza / 2;
        for (let i = 0; i < contatore; i++) {
            lista1.push(lista2[lista2.length - 1]);
            lista2.pop();
        }
    }

    stampa.innerHTML = lista1 + "<br>" + lista2;
} else {
    stampa.innerHTML = "Non è possibile distribuire gli elementi in maniera uguale"
}