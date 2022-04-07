const fs = require('fs');

const readDB = () => !fs.existsSync('./db.json') ? null : JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }))

const saveDB = ( data ) => fs.writeFileSync( './db.json', JSON.stringify(data) )

module.exports = { readDB, saveDB}
