require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/personal_finances`, {
    logging: false,
    native: false
});
 const basename = path.basename(__filename);

 const modelDefiners = [];

 // Here the file_system module reads my Model's folder files, takes them and pushes them into modelDefiners
 fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Here I add sequelize into my models
modelDefiners.forEach(model => model(sequelize));
// Here I auto-force myself a good practice capitalizing my models
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Build relationships through destructuring


module.exports = {
    ...sequelize.models,
    conn: sequelize
}