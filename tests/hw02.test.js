const {
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
} = require('../02-homeworks')

describe('imprimirMayor', () => {
    it('Deberia devolver un string indicanco cual es mayor', () =>{
        expect(imprimirMayor(10, 9)).toBe('10 es mayor que 9')
        expect(imprimirMayor(8, 9)).toBe('9 es mayor que 8')
        expect(imprimirMayor(1, 15)).toBe('15 es mayor que 1')
        expect(imprimirMayor(10, 10)).toBe('Los números son iguales')
    })
})

describe('asignarCalificacion', () => {
    it('Deberia asigar la clasificacion correspondiente', () =>{
        expect(asignarCalificacion(10)).toBe('Calificación: F')
        expect(asignarCalificacion(95)).toBe('Calificación: A')
        expect(asignarCalificacion(68)).toBe('Calificación: D')
        expect(asignarCalificacion(82)).toBe('Calificación: B')
        expect(asignarCalificacion(77)).toBe('Calificación: C')
    })
})

describe('esDiaLaboral', () => {
    it('Deberia devolver un msj con el dia e indicando si es laboral o no', () =>{
        expect(esDiaLaboral('Lunes')).toBe('Lunes es un día laboral')
        expect(esDiaLaboral('Miercoles')).toBe('Miercoles es un día laboral')
        expect(esDiaLaboral('Jueves')).toBe('Jueves es un día laboral')
        expect(esDiaLaboral('Sabado')).toBe('Sabado no es un día laboral')
        expect(esDiaLaboral('Domingo')).toBe('Domingo no es un día laboral')
    })
})

describe('determinarTipoDato', () => {
    it('Deberia devolver un mensaje con el tipo de dato correspondiente', () =>{
        expect(determinarTipoDato('Hola')).toBe('La variable es de tipo cadena de texto')
        expect(determinarTipoDato(10)).toBe('La variable es de tipo número')
        expect(determinarTipoDato(true)).toBe('La variable es de tipo booleano')
        expect(determinarTipoDato('Sabado')).toBe('La variable es de tipo cadena de texto')
        expect(determinarTipoDato({name: 'leo', apellido: 'avila'})).toBe("Tipo de dato desconocido")
    })
})

describe('esCadenaVacia', () => {
    it('Deberia devolver un msj con el dia e indicando si es laboral o no', () =>{
        expect(esCadenaVacia('Lunes')).toBe('La cadena no está vacía')
        expect(esCadenaVacia('A')).toBe('La cadena no está vacía')
        expect(esCadenaVacia('')).toBe('La cadena está vacía')
        expect(esCadenaVacia('ABC')).toBe('La cadena no está vacía')
        expect(esCadenaVacia('')).toBe('La cadena está vacía')
    })
})

describe('verificarContrasena', () => {
    it('Deberia devolver el msj correspondiente si ingresó bien la contrasena', () =>{
        expect(verificarContrasena('holaSoyUnaContraseña#' , 'holaSoyUnaContraseña#')).toBe('Contraseña válida')
        expect(verificarContrasena('Miercoles', 'miercoles')).toBe('Contraseña inválida')
        expect(verificarContrasena('Jueves', 'Jueves')).toBe('Contraseña válida')
        expect(verificarContrasena('Sabado', 'sabado123')).toBe('Contraseña inválida')
        expect(verificarContrasena('pepe2023', 'pepe2023')).toBe('Contraseña válida')
    })
})

describe('verificarPalabra', () => {
    it('Deberia verificar la longitud de las palabras y devuelve el msj correspondiente', () =>{
        expect(verificarPalabra('holaSoyUnaContraseña#')).toBe('La palabra es larga')
        expect(verificarPalabra('Miercoles')).toBe('La palabra es mediana')
        expect(verificarPalabra('Jueves')).toBe('La palabra es mediana')
        expect(verificarPalabra('Hola')).toBe('La palabra es corta')
        expect(verificarPalabra('pepe')).toBe('La palabra es corta')
    })
})

describe('calcularDescuento', () => {
    it('Deberia calcular el descuento, en base del costo total', () =>{
        expect(calcularDescuento(1000)).toBe(900)
        expect(calcularDescuento(499)).toBe(499)
        expect(calcularDescuento(500)).toBe(475)
        expect(calcularDescuento(150)).toBe(150)
        expect(calcularDescuento(1800)).toBe(1620)
    })
})

describe('obtenerMayor', () => {
    it('Deberia devolver el numero mayor', () =>{
        expect(obtenerMayor(1, 5, 10)).toBe(10)
        expect(obtenerMayor(5, 1, 3)).toBe(5)
        expect(obtenerMayor(8, 1 , 99)).toBe(99)
        expect(obtenerMayor(1, 2, 3)).toBe(3)
        expect(obtenerMayor(13, 15, 11)).toBe(15)
    })
})

describe('calcularPrecioEnvio', () => {
    it('', () =>{
        expect(calcularPrecioEnvio(1, 5, 10)).toBe(10)
        expect(calcularPrecioEnvio(5, 1, 3)).toBe(5)
        expect(calcularPrecioEnvio(8, 1 , 99)).toBe(99)
        expect(calcularPrecioEnvio(1, 2, 3)).toBe(3)
        expect(calcularPrecioEnvio(13, 15, 11)).toBe(15)
    })
})

describe('determinarTipoTriangulo', () => {
    it('', () =>{
        expect(determinarTipoTriangulo(1, 5, 10)).toBe(10)
        expect(determinarTipoTriangulo(5, 1, 3)).toBe(5)
        expect(determinarTipoTriangulo(8, 1 , 99)).toBe(99)
        expect(determinarTipoTriangulo(1, 2, 3)).toBe(3)
        expect(determinarTipoTriangulo(13, 15, 11)).toBe(15)
    })
})

describe('calcularDescuentoExtra', () => {
    it('', () =>{
        expect(calcularDescuentoExtra(1, 5, 10)).toBe(10)
        expect(calcularDescuentoExtra(5, 1, 3)).toBe(5)
        expect(calcularDescuentoExtra(8, 1 , 99)).toBe(99)
        expect(calcularDescuentoExtra(1, 2, 3)).toBe(3)
        expect(calcularDescuentoExtra(13, 15, 11)).toBe(15)
    })
})

describe('calcularCalificacionFinal', () => {
    it('', () =>{
        expect(calcularCalificacionFinal(1, 5, 10)).toBe(10)
        expect(calcularCalificacionFinal(5, 1, 3)).toBe(5)
        expect(calcularCalificacionFinal(8, 1 , 99)).toBe(99)
        expect(calcularCalificacionFinal(1, 2, 3)).toBe(3)
        expect(calcularCalificacionFinal(13, 15, 11)).toBe(15)
    })
})

describe('calcularDescuentoCompra', () => {
    it('', () =>{
        expect(calcularDescuentoCompra(1, 5, 10)).toBe(10)
        expect(calcularDescuentoCompra(5, 1, 3)).toBe(5)
        expect(calcularDescuentoCompra(8, 1 , 99)).toBe(99)
        expect(calcularDescuentoCompra(1, 2, 3)).toBe(3)
        expect(calcularDescuentoCompra(13, 15, 11)).toBe(15)
    })
})