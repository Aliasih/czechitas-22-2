//JE třeba načíst číslo kvůli orientaci
let cislo = Number(prompt("Zadej číslo odlišné od 0"));

while ( cislo == 0) {
  console.log("Prosím zadejte číslo jiné než je nula");
  cislo = Number(prompt("zadej"));
}

console.log("Vaše zadané číslo je: " + cislo)





// čti tak dlouho, dokud nezadá 0 a vždy vypiš NAKUMULOVANÝ SOUČET ČÍSEL

let cislo = Number(prompt("Zadej"));

//AKUMULAČNÍ SOUČET do něj budem přičítat

let soucet = 0;

//Dokud uživatel nezadá nulu tak pokračujeme

while (cislo != 0) {
  console.log("Vstup: " + cislo);
  soucet += cislo;
  console.log("Naakumulovaný soucet: " + soucet);
  cislo = Number(prompt("Zadej:")) 
  // znovu while cyklus 
}

console.log.("Finalni soucet: " + soucet);