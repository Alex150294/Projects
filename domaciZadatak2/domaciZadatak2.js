// Definišemo 4 promenljive koristeći var
var a = 10;
var b = 5;
var c = 3;
var d = 2;

// Operacije
var zbir = a + b + c + d;
var oduzimanje = (a - b) - (c - d);
var mnozenje = a * b * c * d;
var deljenje = a / (b / c) * d;

// Funkcija za prikazivanje rezultata na novoj stranici
function showResult(operacija) {
    var rezultat;

    // Koristimo getElementById za selektovanje dugmadi i prikazivanje rezultata
    if (operacija === 'zbir') {
        rezultat = zbir;
    }
    if (operacija === 'oduzimanje') {
        rezultat = oduzimanje;
    }
    if (operacija === 'mnozenje') {
        rezultat = mnozenje;
    }
    if (operacija === 'deljenje') {
        rezultat = deljenje;
    }

    // Otvoriti novu stranicu i prikazati rezultat
    var newWindow = window.open();
    newWindow.document.write('<h1>Rezultat: ' + rezultat + '</h1>');
}

// Funkcija za ispis stringa na novoj stranici
function showString() {
    var str = "Pozdrav, svet!";
    var newWindow = window.open();
    newWindow.document.write('<h1>String: ' + str + '</h1>');
}

// Funkcija za ispis duzine stringa na novoj stranici
function showStringLength() {
    var str = "Pozdrav, svet!";
    var duzina = str.length;
    var newWindow = window.open();
    newWindow.document.write('<h1>Dužina stringa: ' + duzina + '</h1>');
}

// Povezivanje funkcija sa dugmadi koristeći getElementById
document.getElementById("zbir").addEventListener("click", function() {
    showResult('zbir');
});
document.getElementById("oduzimanje").addEventListener("click", function() {
    showResult('oduzimanje');
});
document.getElementById("mnozenje").addEventListener("click", function() {
    showResult('mnozenje');
});
document.getElementById("deljenje").addEventListener("click", function() {
    showResult('deljenje');
});
document.getElementById("ispisStringa").addEventListener("click", function() {
    showString();
});
document.getElementById("duzinaStringa").addEventListener("click", function() {
    showStringLength();
});
