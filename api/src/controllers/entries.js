const EntryService = require('../services/EntryService');
const BalanceService = require('../services/BalanceService');
const toolkit = require('../toolkit');
const { Op } = require('sequelize');

const addEntry = async (req, res) => {
    try {
        console.log(toolkit.messages.conCall);
        await EntryService.createEntry(req.body);
        res.status(201).send("¡Entry successfully saved on DataBase!");
    } catch (error) {
        console.error(error);
        res.status(400).send(toolkit.messages.error);
    };
};

const getLastEntries = async (req, res) => {
    try {
        console.log(toolkit.messages.conCall);
        const lastEntries = await EntryService.getLastEntries();
        res.status(200).json(lastEntries);
    } catch (error) {
        console.error(error);
        res.status(409).json(toolkit.messages.error);
    };
};

const getAddEntries = async (req, res) => {
    try {
        console.log(toolkit.messages.conCall);
        const result = await BalanceService.getAditions();
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(400).send(toolkit.messages.error);
    }
};

const getExtEntries = async (req, res) => {
    try {
        console.log(toolkit.messages.conCall);
        const result = await BalanceService.getExtractions();
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(400).send(toolkit.messages.error);
    }
};

const modifyEntry = async (req, res) => {
    try {
        const entry = req.body;
        const { id } = req.params;
        console.log(entry)
        await EntryService.modifyEntry(id, entry);
        res.status(200).json("Entry update successfully");
    } catch (e) {
        console.error(e);
        res.status(400).send(toolkit.messages.error);
    }
}

const deleteEntry = async (req, res) => {
    try {
        const { id } = req.params
        const deletedEntry = await EntryService.deleteEntry(id);
        res.status(200).json(deletedEntry);
    } catch (error) {
        console.error(error);
        res.status(400).send(toolkit.messages.error);
    }
}

module.exports = {
    addEntry,
    getLastEntries,
    getAddEntries,
    getExtEntries,
    modifyEntry,
    deleteEntry
}