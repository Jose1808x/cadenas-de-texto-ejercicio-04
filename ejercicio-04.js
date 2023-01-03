// - Una cadena de texto con tu Nombre

let nombre = " Jose Antonio ";
console.log(nombre);

// - Otra cadena de texto con tu Apellido

let apellido = " Rodriguez Hernandez ";
console.log(apellido);

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = nombre.concat(" ", apellido);
console.log(estudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let estudianteEsp = estudiante.length;
console.log(estudianteEsp);

// - Una variable que contenga la primera letra del Nombre

let letraNombre = nombre.charAt(0);
console.log(letraNombre);

// - Otra variable que contenga la última letra del Apellido

let letraApellido = apellido.charAt(18);
console.log(letraApellido);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

let espaciosEst = estudiante.trim().length;
console.log(espaciosEst);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let estudianteBol = estudiante.includes(nombre);
console.log(estudianteBol);