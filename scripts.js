
/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
const LETTERSA = LETTERS.split("");

/**
 * Byrja forrit.
 */
function start() {
  alert('Halló!');
}

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits




start();
let koda_afkoda = '';
while(koda_afkoda != 'kóða' && koda_afkoda != 'afkóða') {

  koda_afkoda = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“')
  if (koda_afkoda != 'kóða' && koda_afkoda != 'afkóða'){
    alert(`Veit ekki hvaða aðgerð „${koda_afkoda}“ er. Reyndu aftur`);
  }
}

let hlidrun ='';
while(isNaN(hlidrun) || hlidrun < 1 ||hlidrun > 31){
  hlidrun = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]');
  if(isNaN(hlidrun) || hlidrun < 1 ||hlidrun > 31){
    alert(`${hlidrun} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`)
  }
}
hlidrun = parseInt(hlidrun);

let texti = prompt(`Gefðu upp strenginn sem á að ${koda_afkoda} með hliðrun ${hlidrun}`);
texti = texti.toUpperCase();

/*console.log(texti);
console.log(decode(texti, hlidrun));
*/

if (koda_afkoda == 'kóða'){
  let coded = encode(texti, hlidrun);
  alert(`Kóðun á ${texti} er ${coded}`)
} else if ( koda_afkoda == 'afkóða'){
  let coded= decode(texti, hlidrun);
  alert(`Afkóðun á ${texti} er ${coded}`);
}


/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
  let splittad = str.split("");
  console.log(splittad);
 
for(var i = 0; i<splittad.length; i++){
  for (var j = 0; j<LETTERSA.length; j++){
    if (splittad[i] == LETTERSA[j]){
      splittad[i] = j
    }
  }
}
for (var i = 0; i<splittad.length; i++){
  splittad[i] = splittad[i] + n;
  if(splittad[i]>32){
    splittad[i] = splittad[i] - 32;
  }
  
}
for (var i = 0; i<splittad.length; i++){
  splittad[i] = LETTERS[splittad[i]];
}
samansett = splittad.join("");
  return samansett;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  let splittad = str.split("");
  console.log(splittad);
 
for(var i = 0; i<splittad.length; i++){
  for (var j = 0; j<LETTERSA.length; j++){
    if (splittad[i] == LETTERSA[j]){
      splittad[i] = j
    }
  }
}
for (var i = 0; i<splittad.length; i++){
  splittad[i] = splittad[i] - n;
  if(splittad[i]<0){
    splittad[i] = splittad[i] + 32;
  }
}
for (var i = 0; i<splittad.length; i++){
  splittad[i] = LETTERS[splittad[i]];
}
samansett = splittad.join("");
  return samansett;
}

/*console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
*/