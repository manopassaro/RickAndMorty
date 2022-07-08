const List = require('../models/models')

const teste = () => {
    const msg = "src funfando";
    return msg
};

const findAllCh = async () => {
    const All = await List.find();
    return All;
};

const createCh = async (newCh) => {
    await List.create(newCh);
};

module.exports = {
    teste,
    findAllCh,
    createCh

};
