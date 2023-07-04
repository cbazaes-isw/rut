(async () => {

    const { get_dv } = require('./app/rut');

    const rut = '98765435';
    const dv = get_dv(rut);

    console.log(`${rut}-${dv}`);

})();