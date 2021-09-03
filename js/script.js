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

// Array per contenere il risultato del confronto tra listaZero e listaUtente
let listaFinale = [];

// Limite preimpostato per il numero di cifre
const cap = 5;


listaZero = randomGen(1, 100, 5);
console.log (listaZero);
alert(listaZero);

// Variabile per la funzione setInterval
let i=0;

let timer = setInterval(function(){
    i++;
    if ( i >= 10)
    {
        clearInterval(timer);
        // Chiamiamo la funzione per far inserire i valori all'utente
        listaUtente = inserimentoUtente(cap);
        // Chiamiamo la funzione per confrontare i due array
        listaFinale = confrontaArray(listaUtente,listaZero);

        console.log(listaFinale);

        output (listaFinale);
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

// Funzione per il confronto di due array, restituisce un array contente i valori trovati uguali.
function confrontaArray(arr1, arr2)
{
    let listaIndovinati = [];
    for (let i = 0; i < arr1.length; i++)
    {
        for (let j = 0; j < arr1.length; j++)
        {
            if (arr1[i] == arr2[j])
            {                
                listaIndovinati.push(arr1[i]);
                break;
                // console.log(listaIndovinati);
                // console.log(arr1);
                // console.log(arr2);
            }
        }
    }
    return listaIndovinati;
}

// Funzione per chiedere all'utente di inserire i numeri
function inserimentoUtente(index) {
    let arrUtente = [];
    do
    {
        let input = parseInt(prompt("Inserisci uno dei numeri visualizzati nell'alert"));
        if (arrUtente.includes(input))
        {
            alert("Hai già inserito questo numero.");
        }
        else
        {
            arrUtente.push(input);
        }
    } while (arrUtente.length < index)

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