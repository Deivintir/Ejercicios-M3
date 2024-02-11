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
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**• En el archivo main.ts, declara un alias de tipo de unión que permita recibir valores de tipo “number”, “string” o “null”
 * a aquellos elementos en los que se implemente. */
let something;
/**• A continuación, declara una función que reciba un parámetro de edad con cualquier tipo de los especificados en el alias anterior y
retorne un valor con el tipo “string”.
• El cuerpo de la función deberá tener la lógica para que, si entra un
tipo “number”, lo redondee con “Math.floor()” y lo concatene a un
mensaje; si entra un tipo “string”, lo concatene al mismo mensaje; y
si entra un tipo “null”, devuelva un mensaje de valor incorrecto.
*/
function userAge(something) {
    if (typeof something === 'number') {
        return `La edad del usuario es: ${something}.`;
    }
    if (typeof something === 'string') {
        return `La edad del usuario es: ${something}.`;
    }
    if (typeof !something) {
        return 'Valor incorrecto.';
    }
}
/**• Imprime por consola con “console.log()” una invocación que devuelva cada uno de los tipos especificados en el tipo de unión. */
console.log(userAge('39'));
console.log(userAge(39));
console.log(userAge());
/**• A continuación, declara una clase que implemente la interfaz y las propiedades adicionales para una entidad de formulario de
 * inscripción específico de cursos o formación. */
class Alumn {
    /**• Añade a la clase el método constructor para inicializar los valores de
    las propiedades. */
    constructor(nombre, apellidos, cumpleaños, curso, level) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cumpleaños = cumpleaños;
        this.curso = curso;
        this.level = level;
    }
    /**• Añade a la clase los métodos para establecer y obtener los valores
    de esas propiedades. */
    setNombre(nombre) {
        this.nombre = nombre;
        return 'El nombre de usuario fue modificado.';
    }
    getNombre() {
        return this.nombre;
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
        return 'Los apellidos del usuario han sido modificados.';
    }
    getApellidos() {
        return this.apellidos;
    }
    setCumpleaños(cumpleaños) {
        this.cumpleaños = cumpleaños;
        return 'La fecha de cumpleaños del ususario fue modificada.';
    }
    getCumpleaños() {
        return this.cumpleaños;
    }
    setCurso(curso) {
        this.curso = curso;
        return 'Enhorabuena te has inscrito en un curso.';
    }
    getCurso() {
        return 'estas inscrito en: ' + this.curso;
    }
    setLevel(level) {
        this.level = level;
        return 'El nivel del usuario ha cambiado.';
    }
    getLevel() {
        return 'Nivel: ' + this.level;
    }
}
/**• Instancia un objeto de la clase en una variable con unos valores de inicialización. */
let newAlumn = new Alumn('David', 'Rodríguez Terrón', new Date('1984-10-29'), 'Full-Stack', 1);
/**• Imprime por consola con “console.log()” varios ejemplos de invocación de los métodos. */
console.log(newAlumn.getCumpleaños());
console.log(newAlumn.level);
console.log(newAlumn);
console.log(newAlumn.getLevel());
