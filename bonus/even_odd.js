// TRACCIA - PARI O DISPARI:
// chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9.
// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

//TOOLS:
//- Come chiedere all'utente se vuole pari o dispari? -> PROMPT
//- Chiedere il numero tra 1 e 9 -> PROMPT
//- Const/let per conservare l'informazione
//- Math random, Math floor
//- IF ELSE
//- Operatore Modulo %
//- Console.log + alert

// PREPARAZIONE

//RACCOLTA DATI

const userChoise = prompt("Choose even or odd");
console.log(userChoise);

const userNumber = Number(prompt("Choose a number between 1 and 9"));
console.log(userNumber);

// Generare un numero casuale compreso tra 1 e 9
const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcNumber);

// Somma il numero dell'utente con il numero causale del pc
const somma = userNumber + pcNumber;
console.log(somma);

// Verificare se il risultato della somma è pari o dispari e dichiarare il vincitore
if (somma % 2 == 0 && userChoise == "even") {
  alert("Hai vinto!");
} else if (somma % 2 != 0 && userChoise == "odd") {
  alert("Hai vinto!");
} else {
  alert("Hai preso...");
}
