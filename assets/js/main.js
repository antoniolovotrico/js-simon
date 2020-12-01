//Handler method
$(function(){
    
    var rndArray = [];

    while (rndArray.length < 5) {
        var rndNum = (Math.floor((Math.random() * 100) + 1));
        if (!rndArray.includes(rndNum)) {
            rndArray.push(rndNum);
            //console.log(rndArray);
        }       
    } 
    

});