// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.// 


// Consigli del giorno:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.

// creare const da legare al click dell'evento
const iniziaGioco = document.getElementById("genera-campo");

const container = document.querySelector(".container");



// creare evento on click
iniziaGioco.addEventListener("click", 
    // creare funzione per creazione celle 100
    function(){
        for (let i = 1; i <= 100; i++) {
            // creare const per creare elemento div
            const square = document.createElement("div");
            // collego la class css all'elemento creato
            square.classList.add("square")
            square.append(i);
            // crezione elemento in html
            container.append(square);

            // creazione evento per cambio di colore della cella al click
            square.addEventListener("click",
                function(){
                    square.classList.add("clicked");
                    console.log("Hai cliccato la cella n°: "+ i);
                }
            );
        }   
    }
);



