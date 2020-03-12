var me;
var report;
var about;
var search;

var navbar;

navbar=[document.getElementById("me"), document.getElementById("report"), document.getElementById("about"), document.getElementById("search")]

//randomLetter(navbar[0]);
//randomLetter(navbar[1]);
//randomLetter(navbar[2]);
//randomLetter(navbar[3]);


function replaceAt(word ,index, replacement) {
    if(index>20){console.log(word+" "+replacement+" "+index)}
    if(word.length>20){console.log(word+" "+replacement+" "+index);console.log(" word")}
    if(replacement.length>20){console.log(word+" "+replacement+" "+index);console.log(" replacement")}
    if(index<20){
    return word.substr(0, index) + replacement+ word.substr(index + replacement.length);
    }
}
let timerId1 = setInterval(() => randomLetter(navbar),(Math.floor(Math.random() * (3000 - 800 + 1)) + 800));
//setTimeout(() => { clearInterval(timerId);}, 800);





function randomLetter(navElements){
    var randomArrayPosition=Math.floor(Math.random()*navElements.length);
    var navElement=navElements[randomArrayPosition];
      var originalText=navElement.textContent;
      var originalText1=navElement.textContent;
    var randomNumber=Math.floor(Math.random() * 20);
                var randomPosition=Math.floor(Math.random() * (originalText.length));
    var timerId = setInterval(() => randomLetter2(),30);
setTimeout(() => { clearInterval(timerId);}, 680);

    function randomLetter2(){
            var unicode=Math.floor(Math.random() * 9000);
            var character=String.fromCharCode(unicode);
            originalText=replaceAt(originalText, randomPosition, character);
            navElement.innerHTML=originalText;
    }
    
    
    var revertPossibility=Math.floor(Math.random()*8);
    
    if(revertPossibility>5){
        var timerId2 = setInterval(() => beforeRevert(originalText, navElement),18);
setTimeout(() => { clearInterval(timerId2); revert(navElement)}, 680);
    }
    
            

   
            
        
    
}
function beforeRevert(originalText, navElement){
    for(var i=0; i<navElement.innerHTML.length;i++){
    var unicode=Math.floor(Math.random() * 9000);
            var character=String.fromCharCode(unicode);
            originalText=replaceAt(originalText, i, character);
            navElement.innerHTML=originalText;
}
    
}


function revert(navElement){
    
    if(navElement.id==="me"){
        navElement.innerHTML="/me_"
    }
    if(navElement.id==="report"){
        navElement.innerHTML="/report_"

    }
    if(navElement.id==="about"){
        navElement.innerHTML="/about_"

    }
    if(navElement.id==="search"){
        navElement.innerHTML="/search database_"

    }
}

