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

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const check = await UserService.findUser(email);

        console.log(check)

        if (!check) {
            return res.status(401).send("No user exists with this email!");
        };

        const validate = await UserService.verifyPassword(password, check.id);

        console.log('Pass validation:')
        console.log(validate);

        if (!validate) {
            return res.status(400).send("Invalid password provided!")
        };

        const token = UserService.loginUser(check.id);

        console.log("Not crash ctrl")

        res.status(200).send(token);
    } catch (e) {
        console.log('Login Ctrl')
        console.error(e);
    }
};

const logoutUser = async (req, res) => {
    try {

    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    createNewUser,
    deleteUser,
    updateUser,
    loginUser,
    logoutUser,
};