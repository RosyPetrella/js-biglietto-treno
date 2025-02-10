// TRACCIA
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

const km = prompt("Quanti km vuoi percorrere?");
const age = prompt("Quanti anni hai?");

const price = km * 0.21;

const minorPrice = price - (price / 100) * 20;
const seniorPrice = price - (price / 100) * 40;

if (age < 18) {
  console.log(minorPrice);
} else if (age >= 65) {
  console.log(seniorPrice);
} else {
  console.log(price);
}
