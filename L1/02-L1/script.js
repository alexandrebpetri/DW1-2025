let contador = 0;

function incrementCounter() {
    contador++;
    document.getElementById("contador").innerText = contador;
}

function resetCounter() {
    event.stopPropagation();
    contador = 0;
    document.getElementById("contador").innerText = contador;
}


//IA version 

//let contador = 0;

//document.body.addEventListener("click", function () {
//    contador++;
//    document.getElementById("contador").innerText = contador;
//});

//document.getElementById("resetBtn").addEventListener("click", function (event) {
//    event.stopPropagation(); // Evita que o clique no botão incremente o contador
//    contador = 0;
//    document.getElementById("contador").innerText = contador;
//});
