const purgeEntryBody = async (req, res, next) => {
    try {
        let newBody = req.body;

        for (const prop in newBody) {
            console.log(`Prev ${prop} value: ${newBody[prop]}`);
            if (newBody[prop] === "") {
                newBody[prop] = null;
            }
            console.log(`Post ${prop} value: ${newBody[prop]}`);
        };

        req.body = newBody;
        console.log(`newBody: ${req.body}`);
        next();
    } catch (e) {
        console.error(e);
        return res.status(400).json({message: "Entry body with fatal error."});
    }
};

module.exports = {
    purgeEntryBody,
}