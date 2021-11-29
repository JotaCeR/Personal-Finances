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

module.exports = {
    createNewUser,
};