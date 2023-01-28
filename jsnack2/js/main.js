//Crea due tag div con due id diversi.Un div avrà il testo colorato di rosso
// mentre l’altro di verde.Partendo da un array di numeri,
//stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const listaNumeri = [56, 23, 2, 78, 31, 11, 24, 121];
let listaNumeriPari = [];
let listaNumeriDispari = [];
const listaRossa = document.getElementById("num-dispari");
const listaVerde = document.getElementById("num-pari");

for (let i = 0; i < listaNumeri.length; i++) {
    if (listaNumeri[i] % 2 == 0) {
        listaNumeriPari.push(listaNumeri[i]);
    } else {
        listaNumeriDispari.push(listaNumeri[i]);
    }
}

listaRossa.innerHTML = "Numeri dispari: " + listaNumeriDispari;
listaVerde.innerHTML = "Numeri pari: " + listaNumeriPari;