(function (){
    var element = document.getElementById("animal");
    
    element.addEventListener("click", function(){
        element.innerHTML = element.innerHTML + "<p>Moving</p>";
        console.log("works");
        
    });
    
    element.addEventListener("mouseover", function(){
        element.style.left=element.offsetLeft+ 20 +"px";
        
        console.log(element.style.left)
        console.log(element.style.offsetLeft)
        console.log("mouse over");
        
    });
    
    
    
    
    console.log(element);
    console.log("ready");
})();