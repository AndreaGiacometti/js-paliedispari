// console.log('Paliedispari');

// // Palidroma
// // Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma. Questa funzione deve ricevere come input la parola inserita dall’utente e ritornare true se la parola è palindroma e false se la parola non è palindroma 

// // Chiedere all’utente di inserire una parola
// const parola = prompt('inserisci una parola') //stringa

// // Creare una funzione per capire se la parola inserita è palindroma:

// // - devo creare un array dalla stringa con il metodo .split
// const parolaDivisa = parola.split("") //array
// console.log(parolaDivisa)

// //poi devo creare un altro array, con le lettere della parola girate al contrario, con il metodo .reverse
// const parolaContrario = (parola.split("")).reverse() //array
// console.log(parolaContrario)

// //poi devo confrontare ogni indice dell'array 1 con l'indice dell'array due.
// //per farlo creo un ciclo for che richiami l'indice 0++ di array 1 e lo confronti con lo stesso di array 2:
// //se sono uguali la parola è palindroma e quindi restituisce true, altimenti false
// //poi metto tutto in una funzione

// function parolaPalindroma (parola){
//     for (let i=0; i<parola.length; i++){
//         if (parolaDivisa[i] === parolaContrario[i]){
//             return true
//         } else {
//             return false
//         }
//     }
// }

// console.log (parolaPalindroma(parola))

//FUNZIONA ANCHE CON LE FRASI!

// Pari e Dispari
// L’utente sceglie pari o dispari (tramite prompt) e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione provate a scrivervela voi altrimenti copiatevela da mdn).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//creo una variabile "oddEven" con un promt per chiedere all'utente di sceglilere pari o dispari 

const oddEven = prompt("PARI O DISPARI?", "scrivi 'pari' o 'dispari'")
console.log(oddEven);

function chooseOddEven (oddEven){
    if (oddEven === 'pari'){
       return true
    } else {
        return false
    }
}

console.log(chooseOddEven(oddEven))

//creo una variabile "numUser" con un promt per chiedere all'utente di inserire un numero da 1 a 5
const numUser = parseInt(prompt("INSERISCI UN NUMERO DA 1 A 5"))
console.log(numUser)

//creo un costrutto if-else che restituisca true se pari e false se è dispari
function isNumEven (numUser){
    if (numUser % 2 === 0){
        return true
    } else {
        return false
    }
}

console.log(isNumEven(numUser))

// creo una funzione "numRandom" che genera un numero random
function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

numRandom = getRandomInt(5)
console.log(numRandom)

// creo una funzione "isSumEven" che sommi i due numeri e stabilisca se il risultato è pari o dispari
// - creo la funzione con input numUser e numRandom
// - creo un costrutto if-else che resituisca true se (numUser + numRandom)%2 == 0 altrimenti false
function isSumEven (numSum) {
    if((numUser + numRandom)%2 == 0){
        return true
    }else {
        return false
    }
}

const numSum = ""
console.log(isSumEven(numSum))


// creo un construtto if-else che restituisca "HAI VINTO" se chooseOddEven(oddEven) === isSumEven(numSum), altrimenti "HAI PERSO"

const winner = ""
function whoWin () {
    if(chooseOddEven(oddEven) === isSumEven(numSum)){
        return "HAI VINTO"
    }else {
        return "HAI PERSO :("
    }
}

console.log(whoWin(winner))
