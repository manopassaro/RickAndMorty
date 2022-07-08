const Service = require('../services/service');

const teste = (req, res) => {
    const msg = Service.teste();
    res.send({ msg });
};

const findAllCh = (req, res) => {
    const List = Service.findAllCh();
    res.send( List )
};

const createCh = (req, res) => {
    const newCh = req.body;
    console.log(newCh)
    const banana = Service.createCh(newCh);
    console.log(banana);
    res.status(201).send(banana);
  };

module.exports = {
    teste,
    findAllCh,
    createCh,
}
