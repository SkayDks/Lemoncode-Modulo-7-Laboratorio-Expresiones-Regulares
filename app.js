/** ----- Validar un IBAN ----- */
let patternIban = /^([A-Z]{2})(\d{2})(\d{20}|(\s\d{4}){5})$/;

//"ES6600190020961234567890"  "ES66 0019 0020 9612 3456 7890"
let testIban = "ES66 0019 0020 9612 3456 7890";
console.log("Test de RegEx para IBAN: ", patternIban.test(testIban));
console.log("Extraccion de valores para IBAN: ", testIban.match(patternIban));

/** ----- Validar matrícula coche ----- */
let patternMatricula = /^(\d{4})(\s|-)?([A-Z]{3})$/;

//"2021 GMD" "2345-GMD" "4532BDB" "0320-AAA"
let testMatricula = "2021 GMD";

console.log(
  "Test de RegEx para matricula: ",
  patternMatricula.test(testMatricula)
);
console.log(
  "Extraccion de valores para matricula: ",
  testMatricula.match(patternMatricula)
);

/** ----- Extraer imágenes de un fichero HTML ----- */
let patternImg = /<img[\s\S]+?src="([\s\S]+?)"[\s\S]*?>/g;
let testImg =
  '<html><body><img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/><h1>ejemplo</h1><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/> </body> </html>';

let resultImg = testImg.matchAll(patternImg);

for (let img of resultImg) {
  console.log("Extraccion de los valores de imagenes", img );
}

/** ----- Validar sintaxis tarjeta de crédito ----- */
// Esta expresion solo comprueva si si es correcto el numero de la tarjeta de credito
// pero no extrae los numeros en grupos de 4
// /^(5[0-5]\d{2})((\d{4}){3}|(\s\d{4}){3}|(-\d{4}){3})$/
let patternCredit =
  /^(5[0-5]\d{2})((\d{4})(\d{4})(\d{4})|\s(\d{4})\s(\d{4})\s(\d{4})|-(\d{4})-(\d{4})-(\d{4}))$/;

// "5299-6400-0000-0000" "5299 6400 0000 0000" "5299640000000000"
let testCredit = "5299-6400-0000-0000";

console.log(
  "Test de RegEx para tarjeta de credito: ",
  patternCredit.test(testCredit)
);
console.log(
  "Extraccion de valores para tarjeta de credito: ",
  testCredit.match(patternCredit)
);

/** ----- Buscar Expresiones regulares ----- */

// --- Password
let patternPassModerate = /((?=.+[a-z])(?=.+[A-Z])(?=.+\d)).{8,}/;
let patternPassComplex = /^((?=.+[a-z])(?=.+[A-Z])(?=.+\d)(?=.+[\W_])).{8,}$/;

let testPassModerate = "ABC123abc";
let testPassComplex = "ABC123ab_~$";

console.log(
  "Test de RegEx para password moderada: ",
  patternPassModerate.test(testPassModerate)
);
console.log(
  "Test de RegEx para password completa: ",
  patternPassComplex.test(testPassComplex)
);

// --- URL
let patternURL = /^((https?:\/\/)?www\.)?\w+\.\w+$/;
// "https://www.lemoncode.net"  "www.lemoncode.net"  "lemoncode.net"
let testURL = "lemoncode.net";

console.log("Test de RegEx para URL: ", patternURL.test(testURL));

// ---Hexadecimal
let patternHexa = /^#[\da-fA-F]{6}$/;
let testHexa = "#a32F36";

console.log("Test de RegEx para hexadecimal: ", patternHexa.test(testHexa));
