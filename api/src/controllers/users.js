const UserService = require('../services/UserService');
const toolkit = require('../toolkit');

const createNewUser = async (req, res) => {
    try {
        const { name, password, email } = req.body;
        const result = await UserService.createUser([name, password, email]);

        if (result === false) {
            res.status(400).send(toolkit.existing_user);
        } else {
            res.status(201).json(result);
        };
    } catch (e) {
        console.error(e);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.deleteUser(id);

        res.status(201).json(result.rows);
    } catch (e) {
        console.error(e);
    }
};

const updateUser = async (req, res) => {
    try {
        const values = Object.keys(req.body);
        const { id } = req.params;
        await UserService.updateUser(req.body, values, id);

        res.status(201).send("User successfully updated!");
    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    createNewUser,
    deleteUser,
    updateUser,
};