var navbarBody;

navbarBody=[document.getElementById("s01")]
var originalText3=navbarBody[0].innerHTML;

//randomLetter(navbar[0]);
//randomLetter(navbar[1]);
//randomLetter(navbar[2]);
//randomLetter(navbar[3]);


function replaceAtBody(word ,index, replacement) {
    
    if(index<2000){
    return word.substr(0, index) + replacement+ word.substr(index + replacement.length);
    }
}
let timerId11 = setInterval(() => randomLetterBody(navbarBody),(Math.floor(Math.random() * (3000 - 800 + 1)) + 800));
//setTimeout(() => { clearInterval(timerId);}, 800);





function randomLetterBody(navElements){
    var randomArrayPosition=Math.floor(Math.random()*navElements.length);
    var navElementBody=navElements[randomArrayPosition];
      var originalTextBody=navElementBody.textContent;
      var originalTextBody1=navElementBody.textContent;
    var randomNumber=Math.floor(Math.random() * 20);
                var randomPosition=Math.floor(Math.random() * (originalTextBody.length));
    var timerIdBody = setInterval(() => randomLetter2(),40);
setTimeout(() => { clearInterval(timerIdBody);}, 580);

    function randomLetter2(){
            var unicode=Math.floor(Math.random() * 9000);
            var character=String.fromCharCode(unicode);
            originalTextBody=replaceAtBody(originalTextBody, randomPosition, character);
            navElementBody.innerHTML=originalTextBody;
    }
    
    
    var revertPossibilityBody=Math.floor(Math.random()*8);
    
    if(revertPossibilityBody>8){
        var timderId2Body = setInterval(() => beforeRefactorBody(originalTextBody, navElementBody),300);
setTimeout(() => { clearInterval(timderId2Body); revertBody(navElementBody)}, 600);
    }
    
            

   
            
        
    
}
function beforeRefactorBody(originalText, navElement){
    for(var i=0; i<navElement.innerHTML.length;i++){
    var unicode=Math.floor(Math.random() * 9000);
            var character=String.fromCharCode(unicode);
            originalText=replaceAtBody(originalText, i, character);
            navElement.innerHTML=originalText;
}
    
}


function revertBody(navElement){
    
    if(navElement.id==="s01"){
        navElement.innerHTML=originalText3;
    }
}


