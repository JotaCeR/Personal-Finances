const { Entry } = require('../db');
const toolkit = require('./toolkit');

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

const getLastEntries = async (req, res) => {

    try {
        const allEntries = await toolkit.allEntries();
        let dbEntries = toolkit.buildEntries(allEntries);

        dbEntries.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });

        dbEntries.reverse();

        if (dbEntries.length > 10) {
            dbEntries = dbEntries.slice(0, 10);
        }
        
        res.status(201).send(dbEntries);
    } catch (error) {
        console.log(error)
    };
};

module.exports = {
    addEntry,
    getLastEntries
}