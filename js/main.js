/**• En el archivo main.ts, declara una variable con tipo “string”, otra con
tipo “number” y otra con tipo “boolean”. */
let user;
let age;
let pass;
/**• Inicializa las variables con valores del tipo correspondiente. */
user = 'David';
age = 39;
pass = true;
/**• Imprime por consola con “console.log()” cada variable. */
console.log(user);
console.log(age);
console.log(pass);
/**• Transpila el archivo main.ts a un archivo main.js. (tsc ts/main.ts --outFile js/main.js --target ES2015 --watch).
 * • Comprueba su correcta ejecución en el navegador.
 * • Demuestra que, al cambiar el valor de una variable a un tipo distinto, se produce un error. */
let doughter;
//doughter = 39; //<-Descomentar esta linea para ver el error de transpilación
/**• Implementa el tipo “any” para corregir el error */
let son;
son = 0;
