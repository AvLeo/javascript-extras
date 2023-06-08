const {
    totalChar
} = require('../01-homeworks')

describe('totalChar', ()=>{
    it('Deberia devolver el total en longitud de ambas string', ()=>{
        expect(totalChar('Hola', 'Mundo')).toEqual(9)
    })
})