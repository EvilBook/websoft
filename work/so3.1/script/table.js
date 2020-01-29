(function () {

fetch('data/skolenhet.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });
    })();