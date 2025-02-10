// TRACCIA
// Quanto manca:
// Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.
// Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date.

const time = new Date();
const currentMin = time.getMinutes();
// console.log(currentMin);
const currentHour = time.getHours();
// console.log(currentHour);
const minRemaining = 60 - currentMin;
// console.log(minRemaining);
const nextHour = currentHour + 1;
// console.log(nextHour);

alert(
  "Sono le ore " +
    currentHour +
    " e " +
    currentMin +
    " minuti. Mancano " +
    minRemaining +
    " minuti alle ore " +
    nextHour +
    "."
);
