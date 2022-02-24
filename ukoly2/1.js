

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

console.log("Finalni soucet: " + soucet);