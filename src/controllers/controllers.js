const Service = require('../services/service');

const teste = (req, res) => {
    const msg = Service.teste();
    res.send({ msg });
};

module.exports = {teste}
