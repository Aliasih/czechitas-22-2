let cislo = Number(prompt("Zadej číslo odlišné od 0"));

while ( cislo == 0) {
  console.log("Prosím zadejte číslo jiné než je nula");
  cislo = Number(prompt("zadej"));
}

console.log("Vaše zadané číslo je:" + cislo)