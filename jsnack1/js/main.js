//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let inputNum = document.getElementById("numero");
const stampaNum = document.getElementById("stampa-num");
const inputButton = document.getElementById("invia");

parseInt(inputNum);

inputButton.addEventListener(
    "click",
    function () {
        if (inputNum.value % 2 == 0) {
            stampaNum.innerHTML = "Il numero è pari";
        } else {
            inputNum.value++;
            stampaNum.innerHTML = "Il numero è dispari, il suo successivo è " + inputNum.value;
        }
    }
);