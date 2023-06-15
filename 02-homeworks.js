
function imprimirMayor(num1, num2) {
// Esta funcion recibe dos numeros, tienes que comparar ambos numeros e indicar cual es mayor y cual es menor.
// Ejemplo: num1 = 5 ; num2 = 6 -> deberia devolver "6 es mayor que 5".
// En caso que sean iguales devolver "Los números son iguales"
// Tu código:
    if (num1 > num2) {
      return `${num1} es mayor que ${num2}`;
    } else if (num2 > num1) {
      return `${num2} es mayor que ${num1}`;
    } else {
      return "Los números son iguales";
    }
}

function asignarCalificacion(puntuacion) {
// La funcion recibe un puntuación del 0 al 100, tienes que devolver la clasificacion correspondiente en letra sabiendo lo siguiente:
// puntuacion mayor o igual a 90 -> devolver "Calificación: A"
// puntuacion mayor o igual a 80 -> devolver "Calificación: B"
// puntuacion mayor o igual a 70 -> devolver "Calificación: C"
// puntuacion mayor o igual a 60 -> devolver "Calificación: D"
// puntuacion menor que 60 -> devolver "Calificación: F"

    if (puntuacion >= 90) {
      return "Calificación: A";
    } else if (puntuacion >= 80) {
      return "Calificación: B";
    } else if (puntuacion >= 70) {
      return "Calificación: C";
    } else if (puntuacion >= 60) {
      return "Calificación: D";
    } else {
      return "Calificación: F";
    }
}

function esDiaLaboral(dia) {
  // Por parametros se pasa un día de la semana. tienes que crear un algoritmo que día es, y decir si es día laboral o no
  // tener en cuenta lo siguiente Lunes a Viernes día laboral, Sabado y Domingo día no laboral.
  // Ejemplo: día = Jueves -> devolver "Jueves es un día laboral" || día = Domingo -> devolver "Domingo no es un día laboral"
  // Tu código: 
    if (dia === "Lunes" || dia === "Martes" || dia === "Miercoles" || dia === "Jueves" || dia === "Viernes") {
      return `${dia} es un día laboral`;
    } else if (dia === "Sabado" || dia === "Domingo") {
      return `${dia} no es un día laboral`;
    } else {
      return "Día no válido";
    }
}

function determinarTipoDato(variable) {
  //Esta funcion debe indicar que tipo de dato es, según corresponda.
  //Ejemplo: variable = 'hola' -> deberia devolver "La variable es de tipo cadena de texto"
  //En caso de recibir un tipo de dato desconocido devolver "Tipo de dato desconocido"
  // Tu código: 

    if (typeof variable === "number") {
      return "La variable es de tipo número";
    } else if (typeof variable === "string") {
      return "La variable es de tipo cadena de texto";
    } else if (typeof variable === "boolean") {
      return "La variable es de tipo booleano";
    } else {
      return "Tipo de dato desconocido";
    }
}

function esCadenaVacia(cadena) {
  // Esta funcion debe verificar si 'cadena' está vacia o no. Devolver "La cadena está vacía" en caso que la cadena esté vacia y
  // "La cadena no está vacía" en caso de conterner al menos un caracter o más
  // Tu código:
    if (cadena === "") {
      return "La cadena está vacía";
    } else {
      return "La cadena no está vacía";
    }
}

function verificarContrasena(contrasena, passwd) {
  // Un usuario ingresa su contraseña para poder ingresar a su cuenta. verifica que la contraseña ingresada, sea exactamente igual a la guardada.
  // Devolver "Contraseña válida" en caso de coincidir, y "Contraseña inválida" en caso de no coincidir.
  // Tu código:
    if (contrasena === passwd) {
      return "Contraseña válida";
    } else {
      return "Contraseña inválida";
    }
}

function verificarPalabra(palabra) {
  // Consigna: Escribe una función que tome como argumento una palabra y verifique las siguientes condiciones:
  // - Si la palabra tiene más de 10 caracteres, la función debe devolver "La palabra es larga".
  // - Si la palabra tiene entre 5 y 10 caracteres (inclusive), la función debe devolver "La palabra es mediana".
  // - Si la palabra tiene menos de 5 caracteres, la función debe devolver "La palabra es corta".

  if (palabra.length > 10) {
    return "La palabra es larga";
  } else if (palabra.length >= 5) {
    return "La palabra es mediana";
  } else {
    return "La palabra es corta";
  }
}

function calcularDescuento(totalCompra) {
  // Consigna: Escribe una función que tome como argumento el total de una compra y calcule el descuento correspondiente.
  // Si el total es mayor o igual a 1000, se aplica un descuento del 10%.
  // Si el total es mayor o igual a 500, se aplica un descuento del 5%.
  // Si el total es menor a 500, no se aplica ningún descuento.
  // La función debe devolver el monto total de la compra después de aplicar el descuento.

  if (totalCompra >= 1000) {
    return totalCompra * 0.9; // 10% de descuento
  } else if (totalCompra >= 500) {
    return totalCompra * 0.95; // 5% de descuento
  } else {
    return totalCompra;
  }
}

function obtenerMayor(a, b, c) {
  // Consigna: Escribe una función que tome como argumento tres números y devuelva el mayor de ellos.
  // Utiliza el operador ternario para resolver este ejercicio.

  var mayor = a > b ? (a > c ? a : c) : (b > c ? b : c);
  return mayor;
}

function calcularIndiceMasaCorporal(peso, altura) {
  // Consigna: Escribe una función que tome como argumentos el peso (en kilogramos) y la altura (en metros) de una persona y calcule su índice de masa corporal (IMC).
  // Utiliza la fórmula: IMC = peso / (altura * altura).
  // Luego, devuelve un mensaje según el valor del IMC:
  // - Si el IMC es menor a 18.5, devuelve "Bajo peso".
  // - Si el IMC está entre 18.5 y 24.9, devuelve "Peso normal".
  // - Si el IMC está entre 25 y 29.9, devuelve "Sobrepeso".
  // - Si el IMC es mayor o igual a 30, devuelve "Obesidad".

  var imc = peso / (altura * altura);

  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
}

  

module.exports = {
    imprimirMayor,
    asignarCalificacion,
    esDiaLaboral,
    determinarTipoDato,
    esCadenaVacia,
    verificarContrasena,
    verificarPalabra,
    calcularDescuento,
    obtenerMayor
}