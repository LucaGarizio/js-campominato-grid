// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.// 


// Consigli del giorno:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.

// creare const da legare al click dell'evento
const startGame = document.getElementById("genera-campo");
// creare const per appendere celle
const container = document.querySelector(".container");



// creare evento on click
startGame.addEventListener("click", 
    // creare funzione per creazione celle
    function(){
        for (let i = 1; i <= 100; i++) {

            // creare const per creare elemento div
            const square = document.createElement("div");

            // collegare classe css all'elemento creato
            square.classList.add("square")

            // collegamento cella al rispettivo numero
            square.append(i);

            // crezione elemento in html
            container.append(square);

            // creazione evento per cambio di colore della cella al click
            square.addEventListener("click",
                function(){

                    // collegamento classe css all'elemento square
                    square.classList.add("clicked");

                    // stampare su schermo il numero della cella selezionata
                    alert("Hai selezionato la cella n°: "+ i);
                }
            );
        }   
    }
);



