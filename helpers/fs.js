const fs = require('fs');

const readDB = () => !fs.existsSync('./db.json') ? null : JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }))

//saveDB

module.exports = {readDB}