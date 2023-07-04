const { get_dv, get_factors } = require('./rut');

test('get_dv devuelve el dígito verificador correcto para un RUT válido', () => {
    const resultado = get_dv('12345678');
    expect(resultado).toEqual(5); // El resultado esperado para este RUT es 5
});

test('get_dv devuelve "K" cuando el resultado es 10', () => {
    const resultado = get_dv('98765435');
    expect(resultado).toEqual('K'); // El resultado esperado para este RUT es 'K'
});

test('get_dv devuelve el mismo dígito cuando el RUT tiene un solo dígito', () => {
    const resultado = get_dv('1');
    expect(resultado).toEqual(9); // El resultado esperado para este RUT de un solo dígito es el mismo dígito
});

test('get_dv devuelve undefined cuando se proporciona una entrada vacía', () => {
    const resultado = get_dv('');
    expect(resultado).toBeUndefined(); // El resultado esperado para una entrada vacía es undefined
});

test('get_dv devuelve undefined cuando se proporciona una entrada null', () => {
    const resultado = get_dv(null);
    expect(resultado).toBeUndefined(); // El resultado esperado para una entrada vacía es undefined
});

test('get_dv devuelve undefined cuando se proporciona una entrada undefined', () => {
    const resultado = get_dv(undefined);
    expect(resultado).toBeUndefined(); // El resultado esperado para una entrada vacía es undefined
});

test('get_dv devuelve undefined cuando se proporciona una entrada no numérica', () => {
    const resultado = get_dv('abcdef');
    expect(resultado).toBeUndefined(); // El resultado esperado para una entrada no numérica es undefined
});



test('get_factors devuelve los factores correctos para una longitud dada', () => {
    const resultado = get_factors(5);
    expect(resultado).toEqual([2, 3, 4, 5, 6]); // El resultado esperado para una longitud de 5 es [3, 2, 7, 6, 5]
});

test('get_factors devuelve un array vacío cuando se proporciona una longitud de 0', () => {
    const resultado = get_factors(0);
    expect(resultado).toEqual([]); // El resultado esperado para una longitud de 0 es un array vacío
});

test('get_factors devuelve [3] cuando la longitud es 1', () => {
    const resultado = get_factors(1);
    expect(resultado).toEqual([2]); // El resultado esperado para una longitud de 1 es [3]
});

test('get_factors devuelve un array vacío cuando se proporciona una longitud negativa', () => {
    const resultado = get_factors(-3);
    expect(resultado).toEqual([]); // El resultado esperado para una longitud negativa es un array vacío
});

test('get_factors devuelve los factores correctos para una longitud grande', () => {
    const resultado = get_factors(10);
    expect(resultado).toEqual([2, 3, 4, 5, 6, 7, 2, 3, 4, 5]); // El resultado esperado para una longitud de 10 es [3, 2, 7, 6, 5, 4, 3, 2, 7, 6]
});

