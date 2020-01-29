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

button.addEventListener("click", function(){
    for(var i=0; i <jsonInfo.Skolenheter.length; i++){
        var object=jsonInfo.Skolenheter[i];
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        
        cell1.innerHTML = jsonInfo.Skolenheter[i].Skolenhetskod;
        cell2.innerHTML = jsonInfo.Skolenheter[i].Skolenhetsnamn;
        cell3.innerHTML = jsonInfo.Skolenheter[i].Kommunkod;
        cell4.innerHTML = jsonInfo.Skolenheter[i].PeOrgNr;
        
    }
});