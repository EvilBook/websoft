var jsonInfo;
(function () {

fetch('data/skolenhet.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            jsonInfo=myJson;
  



});
    })();

var button= document.getElementById('loadData');
var table= document.getElementById('table1');

button.addEventListener('click', function(){
    for(var i=0; i <jsonInfo.length; i++){
        var object=jsonInfo[i];
        console.log(object);
    }
});