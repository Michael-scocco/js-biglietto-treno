
/******************************
Esercizio per casa         *
******************************/
/*
js-biglietto-treno
Istruzioni:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

// step1, chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
let quantiKm = parseInt(prompt('Quanti chilometri vuoi fare?'));
let anniPasseggero = parseInt(prompt('Quanti anni hai?'));
console.log('Chilometri, che vuole fare il cliente: ', quantiKm + '\n'
            + 'anni del passegero sono: ', anniPasseggero);

// step1.1, calcolare il prezzo del viaggio su ,21€ al km
let prezzoBiglietto = quantiKm * 0.21;
console.log('Il costo del biglietto è ' + prezzoBiglietto);

/*
step3 cercare funzione il quale mi mi trasforma il numero in un decimale con due numeri dopo la virgola
la funzione è .toFixed(dove all'interno)
*/

var dirittoSconto = document.getElementById('title')

// se, anniPasseggero è minore di 18 anni, allora ha uno sconto pari al 20%
if (anniPasseggero > 0 && anniPasseggero < 18) {
    // step2, applicare sconto del 20% ai minorenni
    let sconto20 = prezzoBiglietto - (prezzoBiglietto * 0.20);
    console.log('Lo sconto del biglietto è pari a ', sconto20.toFixed(2)+'€');
    dirittoSconto.innerHTML= 'Hai diritto allo sconto del 20%,' + '<br>'
    + ' quindi il prezzo del biglietto è ' + sconto20.toFixed(2)+'€';

// se invece, anniPasseggero è maggiore di 65 anni, allora ha uno sconto del 40%
}else if (anniPasseggero > 65) {
    // step2.1, applicare sconto del 40% a persone sopra i 65 anni
    let sconto40 = prezzoBiglietto - (prezzoBiglietto * 0.40);
    console.log('Lo sconto del biglietto è pari a ', sconto40.toFixed(2)+'€');
    dirittoSconto.innerHTML= 'Hai diritto allo sconto del 40%,' + '<br>'
    + ' quindi il prezzo del biglietto è ' + sconto40.toFixed(2)+'€';

// altrimenti, non hai nessuno sconto
}else {
    dirittoSconto.innerHTML= 'Non hai diritto a nessuno sconto';
}


// ecco alcuni esercizi bonus:
/*********************************************************
1. Italia ha una popolazione di 60 milioni di abitanti.  *
    Chiedi all'utente quanti abitanti fa il suo paese    *
    e scrivi se ha più abitanti rispetto a Italia o meno;*
*********************************************************/
/*
        var userPopulation = prompt('how many inhabitants has your nation');
        var italyPopulation = 60000000;
            console.log(italyPopulation, userPopulation);

        if(userPopulation > italyPopulation){
            console.log("la popolazione è maggiore dell'Italia")
        }else{
            console.log("la popolazione è minore dell'Italia")
        }
*/
/**************************************************************************************************
2. Chiedi all'utente quanti esercizi ha da svolgere                                               *
    e poi quanti esercizi ha già svolto.                                                          *
    E poi scrivi:                                                                                 *
    - nel caso se non ha svolto nessun esercizio: 'Devi sbrigarti di svolgere almeno un esercizio;*
    - nel caso ha svolto tutti gli esercizi: "Bravo, ora ti puoi rilassare;                       *
    - nel caso ha svolto alcuni esercizi: "Ti sono rimasti ... numero  ... esercizi da svolgere   *
**************************************************************************************************/
/*
    var toDo = prompt('Quanti esercizi devi svolgere?');//how many exercises do you have to do?
    var done = prompt('quanti esercizi hai svolto?');//how many exercises have you done?
    console.log(toDo, done);

    var toDoNum = parseInt(toDo);
    var doneNum = parseInt(done);


    if(doneNum == 0){
        console.log('Devi sbrigarti di svolgere almeno un esercizio;');

    }else if(doneNum == toDoNum){
        console.log('Bravo, ora ti puoi rilassare;')

    }else if((toDoNum >= 1) && (doneNum <= toDoNum)){


        var notCompleted = toDoNum - doneNum;

        console.log('Ti sono rimasti ' + doneNum  + ' e ' + notCompleted  + ' esercizi da svolgere')
    }
*/
/**************************************************************************************************
3. Vittorio vuole trasferirsi in un nuovo paese. Lei vuole scegliere un paese dove:
            -ci sono più di 6 000 000 abitanti;
            -si parla inglese;
    Chiedi all'utente il nome del paese, quanti abitanti fa il suo paese e quale lingua si parla.
    Poi rispondi se Olga si può trasferirsi oppure no.
**************************************************************************************************/
/*
        var habitant = 6000000;
        var languages = 'English';

        var country = prompt('di che paese sei?');
        var inhabitantsTotal = prompt('quanti abitanti ha il tuo paese?');
        var languagesSpeak = prompt('che lingua si parla');

         if((inhabitantsTotal === habitant) && (languages == languagesSpeak)){
             console.log('Olga si trasferisce');
         }else if (inhabitantsTotal < habitant){
             console.log('Olga non si trasferisce');
         }else if (languagesSpeak != languages){
             console.log('Olga non si trasferisce');
         }
*/
