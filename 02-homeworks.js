
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

function calcularPrecioEnvio(peso, distancia) {
  // Consigna: Escribe una función que tome como argumentos el peso de un paquete (en kilogramos) y la distancia a la que se enviará (en kilómetros) y calcule el precio de envío.
  // Las tarifas son las siguientes:
  // - Si el peso es menor o igual a 1kg y la distancia es menor o igual a 100km, el precio de envío es $10.
  // - Si el peso es mayor a 1kg y menor o igual a 5kg y la distancia es mayor a 100km, el precio de envío es $20.
  // - Si el peso es mayor a 5kg o la distancia es mayor a 500km, el precio de envío es $30.
  // Devuelve el precio de envío calculado.

  var precioEnvio;

  if (peso <= 1 && distancia <= 100) {
    precioEnvio = 10;
  } else if (peso > 1 && peso <= 5 && distancia > 100) {
    precioEnvio = 20;
  } else if (peso > 5 || distancia > 500) {
    precioEnvio = 30;
  }

  return precioEnvio;
}

function determinarTipoTriangulo(ladoA, ladoB, ladoC) {
  // La funcion recibe los siguientes argumentos los tres lados de un triángulo (ladoA, ladoB, ladoC) y determine su tipo.
  // Devuelve un mensaje indicando si el triángulo es equilátero, isósceles o escaleno.
  // Un triángulo es equilátero si todos sus lados son iguales, isósceles si dos de sus lados son iguales y escaleno si todos sus lados son diferentes.

  if (ladoA === ladoB && ladoB === ladoC) {
    return "El triángulo es equilátero";
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "El triángulo es isósceles";
  } else {
    return "El triángulo es escaleno";
  }
}

function calcularDescuentoExtra(precio, categoria, clientePremium) {
  // La funcion recibe los siguientes argumentos el precio, la categoría y un valor booleano indicando si el cliente es premium.
  // La función debe calcular el descuento correspondiente al precio según la categoría y si el cliente es premium.
  // Si la categoría es "A" el descuento base es 20% y si es premium se aplica un descuento del 10% adicional.
  // Si la categoría es "B" el descuento base es 15% y si es premium se aplica un descuento del 5% adicional.
  // La función debe devolver el monto total del producto después de aplicar los descuentos.

  var descuento = 0;

  if (categoria === "A") {
    descuento = 0.2; // 20% de descuento
    if (clientePremium) {
      descuento += 0.1; // 10% de descuento adicional
    }
  } else if (categoria === "B") {
    descuento = 0.15; // 15% de descuento
    if (clientePremium) {
      descuento += 0.05; // 5% de descuento adicional
    }
  }

  var precioDescuento = precio - precio * descuento;
  return precioDescuento;
}

function calcularCalificacionFinal(examen1, examen2, proyecto, asistencia) {
  // La funcion recibe los siguientes argumentos las calificaciones de dos exámenes, un proyecto y el porcentaje de asistencia de un estudiante.
  // La función debe calcular la calificación final del estudiante según las siguientes reglas:
  // - Si el estudiante tiene una asistencia menor al 80%, la calificación final es "Reprobado".
  // - Si el estudiante tiene una asistencia igual o mayor al 80%, se calcula el promedio de los exámenes y se le suma la calificación del proyecto.
  // - Si el promedio de los exámenes más la calificación del proyecto es mayor o igual a 90, la calificación final es "A".
  // - Si el promedio está entre 80 y 89, la calificación final es "B".
  // - Si el promedio está entre 70 y 79, la calificación final es "C".
  // - Si el promedio está entre 60 y 69, la calificación final es "D".
  // - Si el promedio es menor a 60, la calificación final es "F".
  // La función debe devolver la calificación final.
  // Tu codigo:

  if (asistencia < 80) {
    return "Reprobado";
  } else {
    var promedioExamenes = (examen1 + examen2) / 2;
    var calificacionFinal = promedioExamenes + proyecto;

    if (calificacionFinal >= 90) {
      return "A";
    } else if (calificacionFinal >= 80 && calificacionFinal <= 89) {
      return "B";
    } else if (calificacionFinal >= 70 && calificacionFinal <= 79) {
      return "C";
    } else if (calificacionFinal >= 60 && calificacionFinal <= 69) {
      return "D";
    } else {
      return "F";
    }
  }
}

function calcularDescuentoCompra(totalCompra, cuponDescuento, clientePremium) {
  // La funcion toma los siguientes argumentos: el total de la compra, un cupón de descuento y un valor booleano indicando si el cliente es premium.
  // La función debe calcular el descuento correspondiente a la compra según las siguientes reglas:
  // - Si el cliente es premium, se aplica un descuento del 25%.
  // - Si el cliente no es premium y tiene un cupón de descuento válido = "DESC10", se aplica un descuento del 10%.
  // - Si el cliente no es premium y tiene un cupón de descuento válido = "DESC5", se aplica un descuento del 5%.
  // - Si el cliente no es premium y no tiene un cupón de descuento válido, no se aplica ningún descuento.
  // La función debe devolver el monto total de la compra después de aplicar el descuento.
  // Tu Codigo:
  var descuento = 0;

  if (clientePremium) {
    descuento = 0.25; // 20% de descuento para clientes premium
  } else {
    if (cuponDescuento === "DESC10") {
      descuento = 0.1; // 10% de descuento con cupón válido
    }else if(cuponDescuento === 'DESC5'){
      descuento = 0.05;
    }
  }

  var precioDescuento = totalCompra - totalCompra * descuento;
  return precioDescuento;
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
    obtenerMayor,
    calcularPrecioEnvio,
    determinarTipoTriangulo,
    calcularDescuentoExtra,
    calcularCalificacionFinal,
    calcularDescuentoCompra
}