//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const numInteri = [22, 5, 13, 61, 7, 18];
const mexSomma = document.getElementById("somma");

let somma = 0;
for (let i = 0; i < numInteri.length; i++) {
    if (i % 2 != 0) {
        somma += numInteri[i];
    }
}

// console.log("La somma è", somma);
mexSomma.innerHTML = "La somma è " + somma;