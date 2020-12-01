//Handler method
$(function(){

    //creare array vuoto da riempire con 5 numeri casuali
    var rndArray = [];

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
       
     

    setTimeout(function() {
        var num1 =  Number(prompt("inserisci il primo dei cinque numeri che ricordi"));
        var num2 =  Number(prompt("inserisci il secondo dei cinque numeri che ricordi"));
        var num3 =  Number(prompt("inserisci il terzo dei cinque numeri che ricordi"));
        var num4 =  Number(prompt("inserisci il quarto dei cinque numeri che ricordi"));
        var num5 =  Number(prompt("inserisci il quinto dei cinque numeri che ricordi")); 
    },4000);   
       

});