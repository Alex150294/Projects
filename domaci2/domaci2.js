var brojevi = [5, 8, 10, 25, 56, 23, 44, 3, 100, 101];
var stringovi = ["Ana", "Igor", "Petar", "Marko", "Srdjan"];
var duzinabrojevi = brojevi.length;
var duzinastringovi = stringovi.length;
var zbirbrojeva = 0;
var a = brojevi[0];
var b = stringovi[0];
var rezultat = duzinabrojevi - duzinastringovi;
var rezultat2 = duzinastringovi - duzinabrojevi;

function zbirBrojevi() {
    var zbir = 0;
    var i = 0;
    while (i < duzinabrojevi) {
        zbir += brojevi[i];
        i++;
    }
    return zbir;
}

function najmanjiElement() {
    var najmanji = brojevi[0];
    var i = 0;
    while (i < duzinabrojevi) {
        if (brojevi[i] < najmanji) {
            najmanji = brojevi[i];
        }
        i++;
    }
    return najmanji;
}

function najveciElement() {
    var najveci = brojevi[0];
    var i = 0;
    while (i < duzinabrojevi) {
        if (brojevi[i] > najveci) {
            najveci = brojevi[i];
        }
        i++;
    }
    return najveci;
}

function ispisElemenataNiza() {
    var ispis = " ";
    var i = 0;
    while (i < duzinastringovi) {
        ispis += stringovi[i] + "<br>" + "<br>";
        i++;
    }
    return ispis;
}

function zbirBrojevaElemenata() {
    var zbirbrojeva = 0;
    var i = 1;
    while (i < duzinabrojevi - 1) {
        zbirbrojeva += brojevi[i];
        i++;
    }
    return zbirbrojeva;
}

function ispitajDuzinu() {
    var ispitaj = " ";
    if (duzinabrojevi > duzinastringovi) {
        ispitaj = "duzi je niz brojeva";
    } else {
        ispitaj = "duzi je niz stringova";
    }
    return ispitaj;
}

function zaKolikoJeDuze() {
    var ispitaj = " ";
    if (duzinabrojevi > duzinastringovi) {
        ispitaj = "duzi je niz brojeva" + " " + rezultat;
    } else {
        ispitaj = "duzi je niz stringova" + " " + rezultat2;
    }
    return ispitaj;
}

function ispisRezultata1() {
    document.getElementById("rezultat1").innerHTML = "zbir brojeva niza je" + " " + zbirBrojevi();
}

function ispisRezultata2() {
    document.getElementById("rezultat2").innerHTML = "najmanji element niza je" + " " + najmanjiElement();
}

function ispisRezultata3() {
    document.getElementById("rezultat3").innerHTML = "najveci element niza je" + " " + najveciElement();
}

function ispisRezultata4() {
    document.getElementById("rezultat4").innerHTML = "ispis elemenata stringova" + "<br>" + ispisElemenataNiza();
}

function ispisRezultata5() {
    document.getElementById("rezultat5").innerHTML = "zbir brojeva bez prvog i zadnjeg clana je" + " " + zbirBrojevaElemenata();
}

function ispisRezultata6() {
    document.getElementById("rezultat6").innerHTML = ispitajDuzinu();
}

function ispisRezultata7() {
    document.getElementById("rezultat7").innerHTML = zaKolikoJeDuze();
}



const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const snowflakes = [];
const maxSnowflakes = 100;


class Snowflake {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.wind = Math.random() * 1 - 0.5;
    }

    update() {
        this.y += this.speed;
        this.x += this.wind;

       
        if (this.y > canvas.height || this.x > canvas.width || this.x < 0) {
            this.x = Math.random() * canvas.width;
            this.y = -this.radius;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }
}


for (let i = 0; i < maxSnowflakes; i++) {
    snowflakes.push(new Snowflake());
}


function animateSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
    });

    requestAnimationFrame(animateSnow);
}


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


animateSnow();

