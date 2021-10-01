const { Entry } = require('../db');

const addEntry = async (req, res) => {
    try {
        const { reason, amount, date, type } = req.body;
        const entry = await Entry.create({
            reason,
            amount,
            date,
            type
        });
        // console.log(entry);
        res.status(201).send(entry);
    } catch (error) {
        console.log(error)
    };
};

module.exports = {
    addEntry
}