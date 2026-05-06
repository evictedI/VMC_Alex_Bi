function rechnen(operation) {
    const m1 = document.getElementById("zahl1").valueAsNumber;
    const m2 = document.getElementById("zahl2").valueAsNumber;
    const out = document.querySelector("#ergebnis>strong");

    // Validierung: Falls Felder leer sind
    if (isNaN(m1) || isNaN(m2)) {
        out.textContent = "Bitte Zahlen eingeben";
        return;
    }

    let ergebnis;
    switch (operation) {
        case 'add': ergebnis = m1 + m2; break;
        case 'sub': ergebnis = m1 - m2; break;
        case 'mul': ergebnis = m1 * m2; break;
        case 'div': 
            ergebnis = (m2 !== 0) ? m1 / m2 : "Fehler (Division durch 0)"; 
            break;
    }

    out.textContent = ergebnis;
}