/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// String è come si fosse la "class di Html" possiamo mettere dei nome senza mettere "let o var"
let myPrimoTesto = "Hello world!";
console.log(myPrimoTesto); //consolo.log serve per vedere sul browser la corretteza.
//abbiamo i valori numerici interemo e decimale
let anno = 2024;
//Ci sono anche i boolean pero dare dei valori true e false!


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Miguel";
console.log (myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;

console.log("Somma di numero1 e numero2 è:", somma)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12; 
console.log(x); //ho messo consolo.log per vedere sul browser.


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Jano Salcedo";
console.log (myName);
//metto const ma mi da error sul browser!
// const myName ="Miguel";
// console.log(myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x = 12;
let number1 = 4;
let risposta = x - number1;
console.log("sottrazione di x e il number1:", risposta); 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log(name1==name2);
console.log(name1!==name2); //!== il valore cambia 