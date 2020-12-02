//Handler method
$(function(){

    //array vuoto da riempire con 5 numeri casuali creati dal pc
    var rndArray = [];

    //array vuoto da riempire con i 5 numeri inseriti dall'utente
    var numInseriti = [];

    //array vuoto da riempire con i numeri indovinati dall'utente
    var numIndovinati = [];

    //variabile rappresentante del div box_num nell'htlml
    var boxNum = document.getElementById("rnd_arr");

    //variabile rappresentante del div messagio nell'htlml
    var message = document.getElementById("message");

    //ciclo while fin quando nell'array non saranno presenti 5 numeri differenti
    while (rndArray.length < 5) {
        var rndNum = (Math.floor((Math.random() * 100) + 1));
        if (!rndArray.includes(rndNum)) {
            rndArray.push(rndNum);
            console.log(rndArray);
        }       
    } 
    //scrivi l'array nell'html
    boxNum.innerHTML = "Memorizza questi cinque numeri, hai trenta secondi di tempo!!" +" "+ rndArray;
    
    // imposta timeout di 30sec per la visualizzazione dei 5 numeri da memorizzare
    setTimeout(function() {
        $("#rnd_arr").hide();
    },30000);
          
    // ad un secondo di distanza dalla scomparsa dell'elenco di numeri chiedere singolarmente per ogni prompt ognuno dei cinque numeri da ricordare
    setTimeout(function() {

        // Ciclo while per creare vari prompt da inserire in un array
        while (numInseriti.length < rndArray.length) {
            var numIns =  Number(prompt("Inserisci uno dei cinque numeri che ricordi"));
            numInseriti.push(numIns);
            console.log(numInseriti);
        }
        
        //creare ciclo for che confronta i numeri scelti dall'utente con quelli random per un numero volte pari alla lunghezza dell'array
        for (var i = 0; i < numInseriti.length; i++) {
            if (rndArray.includes(numInseriti[i])) {
                numIndovinati.push(numInseriti[i]);
                console.log(numIndovinati);
            } 
        }
        message.innerHTML = "I numeri che hai indovinato sono" +" "+ numIndovinati +" "+ "per un totale di"+" "+ numIndovinati.length +" "+ "numeri";     
    },31000);      

});
