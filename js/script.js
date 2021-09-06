// Un alert() espone 5 numeri generati casualmente.
//
// Da li parte un timer di 30 secondi.
// 
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Array per contenere i numeri generati casualmente dal PC
let listaZero = [];

// Array per contenere i numeri inseriti dall'utente
let listaUtente = [];

// Limite preimpostato per il numero di cifre
const cap = 5;

listaZero = randomGen(1, 100, 5);
console.log (listaZero);
alert(listaZero);

// Variabile per la funzione setInterval
let i=0;

let timer = setInterval(function(){
    i++;
    if ( i >= 3)
    {
        clearInterval(timer);
        // Chiamiamo la funzione per far inserire i valori all'utente
        listaUtente = inserimentoUtente(cap, listaZero);

        console.log(listaUtente);

        output (listaUtente);
    }
    console.log(i);
}, 1000);





function output (arr)
{
    document.getElementById('alert').innerHTML += '<h1>I numeri indovinati sono:</h1>';
    document.getElementById('alert').innerHTML += '<h2>' + arr.length + '</h2>';
    for (let i = 0; i < arr.length; i++)
    {
        document.getElementById('alert').innerHTML += '<span class="px-3">' + arr[i] + '</span>';
    }
}





// La funzione di inserimentoUtente permette l'inserimento all'utente di un numero di valori fino al valore di index
// Inoltre controlla che il valore sia valido e non ripetuto, salvandolo solo nel caso che sia verificato.
function inserimentoUtente(index, arr) {
    let arrUtente = [];
    let arrTries = [];

    // Ciclo for per l'inserimento del valore in input nell'array utente
    for (let i = 0; i < index; i++)
    {
        let input;
        // Il ciclo do-while controlla che il valore non sia NaN e che non sia un valore già inserito in precedenza
        do
        {
            input = parseInt(prompt("Inserisci uno dei numeri visualizzati nell'alert"));
            if (arrUtente.includes(input) || arrTries.includes(input))
            {
                alert('Hai già inserito questo numero: ' + input);
                input = false;
            }else if(isNaN(input))
            {
                alert('Il valore inserito non è un numero');
            }
            console.log(input)
        } while (isNaN(input) || input === false)
        // Una volta effettuato il controllo sul valore inserito, ed essere sicuri che sia un numero valido
        // La condizione controlla se è uguale ad uno dei valori generato casualmente.
        // Altrimenti lo salva in un array temporaneo per ricordare all'utente i valori già inseriti
        if (arr.includes(input))
        {
            arrUtente.push(input);
        }else 
        {            
            arrTries.push(input);
        }
        console.log(arrUtente);
        console.log(arrTries);

    }    
    
    return arrUtente;
}





// Funzione per generare casualmente 5 numeri numeri unici, restituisce lo stesso array
function randomGen (min, max, cap) {
    let arr = [];
    let num = 0;

    do
    {
        num = Math.floor(Math.random() * (max - min + 1) + min);
        if (!arr.includes(num))
        {
            arr.push(num);
        }
    } while (arr.length < cap)

    // arr.sort(function(a,b) {return a - b});
    return arr;
}