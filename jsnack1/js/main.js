//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const inputNum = document.getElementById("numero");
const stampaNum = document.getElementById("stampa-num");
const inputButton = document.getElementById("invia");

inputButton.addEventListener(
    "click",
    function () {
        if (inputNum.value % 2 == 0) {
            stampaNum.innerHTML = "Il numero " + inputNum.value + " è pari";
        } else {
            let numSuccessivo;
            numSuccessivo = inputNum.value + 1;
            stampaNum.innerHTML = "Il numero " + inputNum.value + " è dispari, il suo successivo è " + numSuccessivo;
        }
    }
);