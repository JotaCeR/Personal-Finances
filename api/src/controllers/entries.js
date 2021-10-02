const { Entry } = require('../db');
const toolkit = require('./toolkit');
const { Op } = require('sequelize');

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
        res.status(400).send(toolkit.errorMsg)
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
        console.log(error);
        res.status(400).send(toolkit.errorMsg);
    };
};

const getAddEntries = async (req, res) => {
    try {
        let dbEntries = await toolkit.aditionEntries();
        const result = toolkit.buildEntries(dbEntries);
        res.status(201).send(result)
    } catch (error) {
        console.log(error);
        res.status(400).send(toolkit.errorMsg);
    }
};

const getExtEntries = async (req, res) => {
    try {
        let dbEntries = await toolkit.extractionEntries();
        const result = toolkit.buildEntries(dbEntries);
        res.status(201).send(result)
    } catch (error) {
        console.log(error);
        res.status(400).send(toolkit.errorMsg);
    }
};

const deleteEntry = async (req, res) => {
    try {
        const { id } = req.params
        await Entry.destroy({where: {
            id: {
                [Op.eq]: id
            }
        }});

        res.status(200).json({msg: "Entry deleted succesfully"})
    } catch (error) {
        console.log(error);
        res.status(400).send(toolkit.errorMsg)
    }
}

module.exports = {
    addEntry,
    getLastEntries,
    getAddEntries,
    getExtEntries,
    deleteEntry
}