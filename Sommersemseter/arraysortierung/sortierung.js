const a = [23, false, -7n, true, "Vladimir", {age: 11}];

a.sort((x, y) => {
    const typX = typeof x;
    const typY = typeof y;

    // 1. Nach Datentyp gruppieren
    if (typX < typY) return -1;
    if (typX > typY) return 1;

    // 2. Innerhalb des Typs nach Wert sortieren
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
});

console.log(a);