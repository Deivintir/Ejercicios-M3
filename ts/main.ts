/**• En el archivo main.ts, declara una variable con tipo “string”, otra con
tipo “number” y otra con tipo “boolean”. */
let user:string;
let age:number;
let pass:boolean;
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
let doughter:string;
//doughter = 39; //<-Descomentar esta linea para ver el error de transpilación
/**• Implementa el tipo “any” para corregir el error */
let son:any;
son = 0;
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/**• En el archivo main.ts, declara un alias de tipo de unión que permita recibir valores de tipo “number”, “string” o “null” 
 * a aquellos elementos en los que se implemente. */

let something: string|number|null;
/**• A continuación, declara una función que reciba un parámetro de edad con cualquier tipo de los especificados en el alias anterior y
retorne un valor con el tipo “string”. 
• El cuerpo de la función deberá tener la lógica para que, si entra un
tipo “number”, lo redondee con “Math.floor()” y lo concatene a un
mensaje; si entra un tipo “string”, lo concatene al mismo mensaje; y
si entra un tipo “null”, devuelva un mensaje de valor incorrecto.
*/
function userAge<T>(something:T):any{
    if(typeof something === 'number'){
        return `La edad del usuario es: ${something}.`;
    }
    if(typeof something === 'string'){
        return `La edad del usuario es: ${something}.`;
    }
    if(typeof !something){
        return 'Valor incorrecto.';
    }
}
/**• Imprime por consola con “console.log()” una invocación que devuelva cada uno de los tipos especificados en el tipo de unión. */
console.log(userAge('39'));
console.log(userAge(39));
console.log(userAge());
/**• Transpila el archivo main.ts a un archivo main.js.
 * comando:
 * tsc ts/main.ts --outFile js/main.js --target ES2015 --watch
 * • Comprueba su correcta ejecución en el navegador. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */