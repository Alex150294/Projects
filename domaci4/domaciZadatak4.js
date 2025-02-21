// Kreiramo datum sa fiksnim vrednostima
var fixedDate = new Date(2024, 10, 30, 10, 10, 42);  // Mesec je 0-indeksiran, pa je 10 za novembar

// Ispisujemo godine, mesec, dan itd.
document.getElementById("year").innerText = fixedDate.getFullYear();  // Godina
document.getElementById("month").innerText = fixedDate.getMonth() + 1; // Mesec (dodajemo 1 jer je 0-indeksiran)
document.getElementById("day").innerText = fixedDate.getDate();  // Dan u mesecu
document.getElementById("hours").innerText = fixedDate.getHours(); // Sat
document.getElementById("minutes").innerText = fixedDate.getMinutes(); // Minut
document.getElementById("seconds").innerText = fixedDate.getSeconds(); // Sekund
