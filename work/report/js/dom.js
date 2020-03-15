    var element = document.getElementById("image");
    var w = window.innerWidth;
var h = window.innerHeight;
    
    element.addEventListener("click", function(){
                //element.style.left=element.offsetLeft+ 20 +"px";
        element.setAttribute("style", "left:"+ Math.abs(getRandomInt(w))+"px; "+"top:"+ Math.abs(getRandomInt(h))+"px;");

        console.log("works");
        
    });
    
    /*element.addEventListener("mouseover", function(){
        element.style.left=element.offsetLeft+ 20 +"px";
        
        console.log(element.style.left)
        console.log(element.style.offsetLeft)
        console.log("mouse over");
        
    });*/
    
    
    
    
    console.log(element);
    console.log("ready");
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
