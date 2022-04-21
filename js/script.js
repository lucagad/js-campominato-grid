// **Consegna**
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// **Consigli del giorno:**
// **** Creiamo prima una griglia unica (es con 100 quadratini) per  poi dinamicizzare il dato con classi css dedicate
// **** Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


const containerGame = document.querySelector('.container_game_grid');
const listNumbers = [];

let numberSquare = 100;



function getUniqueRandomNumber(min, max){
  let number = null;
  let valid = false;

  while(!valid){
    number = getRandomNumber(min, max);
 
    if(!listNumbers.includes(number)){
      valid = true;
      listNumbers.push(number)
    }
  }

  return number;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getOddEven(n){
    if(n % 2) return 'odd';
    return 'even';
}