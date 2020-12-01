//Handler method
$(function(){

    //array vuoto da riempire con 5 numeri casuali creati dal pc
    var rndArray = [];

    //array vuoto da riempire con i 5 numeri inseriti dall'utente
    var numInseriti = [];

    //array vuoto da riempire con i numeri indovinati dall'utente
    var numIndovinati = [];

    //ciclo while fin quando nell'array non saranno presenti 5 numeri differenti
    while (rndArray.length < 5) {
        var rndNum = (Math.floor((Math.random() * 100) + 1));
        if (!rndArray.includes(rndNum)) {
            rndArray.push(rndNum);
            console.log(rndArray);
        }       
    } 
    //scrivi l'array nell'html
    document.getElementById("rnd_arr").innerHTML = rndArray;
    
    // imposta timeout di 30sec per la visualizzazione dei 5 numeri da memorizzare
    setTimeout(function() {
        $("#rnd_arr").hide();
    },3000);
       
     
    // ad un secondo di distanza dalla scomparsa dell'elenco di numeri chiedere singolarmente per ogni prompt ognuno dei cinque numeri da ricordare
    setTimeout(function() {

        var num1 =  Number(prompt("inserisci il primo dei cinque numeri che ricordi"));
        var num2 =  Number(prompt("inserisci il secondo dei cinque numeri che ricordi"));
        var num3 =  Number(prompt("inserisci il terzo dei cinque numeri che ricordi"));
        var num4 =  Number(prompt("inserisci il quarto dei cinque numeri che ricordi"));
        var num5 =  Number(prompt("inserisci il quinto dei cinque numeri che ricordi"));

        //inserire i numeri scelti dall'utente nell'array preposto
        numInseriti.push(num1 , num2 , num3 , num4 , num5);
        console.log(numInseriti);
        
        //creare ciclo for che confronta i numeri scelti dall'utente con quelli random per un numero volte pari alla lunghezza dell'array
        for (var i = 0; i < numInseriti.length; i++) {
            if (rndArray.includes(numInseriti[i])) {
                numIndovinati.push(numInseriti[i]);
                console.log(numIndovinati);
            } 
        }
        alert("hai indovinato" +""+ numIndovinati +""+ "per un totale di"+""+ numIndovinati.length +""+ "numeri");
        
    },4000);      

});
