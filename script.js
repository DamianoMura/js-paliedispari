// Consigli del giorno

// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?


// Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


 

const word=prompt("inserisci una parola e vediamo se è palindroma")

//inizializziamo la funzione e diamo word come parametro

function palindrome(word){
 // rovesciamo la parola con un for 
  //dichiariamo una stringa di supporto
  let reversed;  
  for(let i=word.length ; i>=0; i--){
    if(reversed==undefined){
      reversed=word[i];
    }
    else{
      reversed+=word[i];
    }
  }
  if(word===reversed) return true;
  else return false;
}

if(palindrome(word)==true){
  console.log("è palindroma")
}
else{
  console.log("non palindroma")
}

// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
let isEvenOrOdd=validate(prompt("pari o dispari?"));
let playerNumber=validate(parseInt(prompt("inserisci un numero da 1 a 5")));;

//ripetizione in caso di input non accettati
while (isEvenOrOdd==null || playerNumber==null){
  alert("inserisci le informazioni corrette")
  if(isEvenOrOdd==null){
    isEvenOrOdd = validate(prompt("pari o dispari?"));
  }
  else if(playerNumber==null){
  playerNumber = validate(parseInt(prompt("inserisci un numero da 1 a 5")));
}
}
//console.log(`${playerNumber} & ${isEvenOrOdd}`) // debug

//acquisisco le info dell'utente ossia il numero e la predizione se la somma è pari o dispari


//funzione per validare gli input

function validate(request){
  if((request==="pari"||request==="dispari")||(request>0 && request<6)){
    console.log("input accettati")
return request;
}
else {
  console.log("input non accettati")
return null;
}

}
function computerRolls(){
  const comEvenOrOdd=Math.round(random());//genera un numero tra 0=pari e 1=dispari 
  const comNumber=Math.round(random()*5)+1;
}