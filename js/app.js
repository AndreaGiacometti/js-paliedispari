console.log('Paliedispari');

// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma. Questa funzione deve ricevere come input la parola inserita dall’utente e ritornare true se la parola è palindroma e false se la parola non è palindroma 

// Chiedere all’utente di inserire una parola
const parola = prompt('inserisci una parola') //stringa

// Creare una funzione per capire se la parola inserita è palindroma:

// - devo creare un array dalla stringa con il metodo .split
const parolaDivisa = parola.split("") //array
console.log(parolaDivisa)

//poi devo creare un altro array, con le lettere della parola girate al contrario, con il metodo .reverse
const parolaContrario = (parola.split("")).reverse() //array
console.log(parolaContrario)

//poi devo confrontare ogni indice dell'array 1 con l'indice dell'array due.
//per farlo creo un ciclo for che richiami l'indice 0++ di array 1 e lo confronti con lo stesso di array 2:
//se sono uguali la parola è palindroma e quindi restituisce true, altimenti false
//poi metto tutto in una funzione

function parolaPalindroma (parola){
    for (let i=0; i<parola.length; i++){
        if (parolaDivisa[i] === parolaContrario[i]){
            return true
        } else {
            return false
        }
    }
}

console.log (parolaPalindroma(parola))

//FUNZIONA ANCHE CON LE FRASI!
