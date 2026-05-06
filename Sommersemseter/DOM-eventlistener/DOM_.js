// --- Aufgabe 1 & 3: Zähler mit Event Listenern ---
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("btnPlus").addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById("btnMinus").addEventListener("click", () => {
    count--;
    counterDisplay.textContent = count;
});

document.getElementById("btnReset").addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
});


// --- Aufgabe 2: Zufallsfarbe für die Überschrift ---
const title = document.getElementById("title");
const btnColor = document.getElementById("btnColor");

btnColor.addEventListener("click", () => {
    // Zufallszahlen von 0 bis 255 generieren
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // RGB String zusammenbauen (Template String)
    const randomRGB = `rgb(${r}, ${g}, ${b})`;
    
    // Farbe zuweisen
    title.style.color = randomRGB;
});