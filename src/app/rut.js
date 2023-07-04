
const get_dv = (cuerpo) => {

    const rut = String(cuerpo);
    if (!rut) return undefined;

    const factors = get_factors(rut.length);
    const arr = rut
        .split('')
        .reverse()
        .map(d => Number(d));

    if (!arr.every(a => !isNaN(a))) return undefined;

    let suma = 0;
    arr.forEach((v, i) => {
        suma += v * factors[i];
    });

    const diff_resto = 11 - (suma % 11);

    return (diff_resto < 10 ? diff_resto : 'K');

};

const get_factors = (length) => {

    let arr = [];
    let prev = 2;
    for (let i = 0; i < length; i++) {
        arr.push(prev++);
        if (prev > 7) prev = 2;
    }

    return arr;

};

module.exports = { get_dv, get_factors };