const UserService = require('../services/UserService');
const toolkit = require('../toolkit');

const verify_email = async (req, res, next) => {
    try {
        const { email } = req.body;
        const existing_email = await UserService.findUser(email);

        if (existing_email) {
            return res.status(400).send(toolkit.existing_user);
        };

        if (
            !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
              email
            )
        ) {
            return res.status(400).send(toolkit.invalid_email);
        }

        next();
    } catch (e) {
        console.error(e);
    }
};

const verify_password = async (req, res, next) => {
    try {
        const { password } = req.body;

        if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
              password
            )
          ) {
              return res.status(400).send(toolkit.invalid_password);
          }

    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    verify_email,
    verify_password,
};