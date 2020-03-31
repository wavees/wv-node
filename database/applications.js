/*!
 * @database Application
 * @description Database, that'll store all info about different applications.
 * Applications module needs to be turned on.
 */
// Connect modules
const low      = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter  = new FileSync('storage/applications.json');
const db       = low(adapter);

// Default database structure
db.defaults({
  applications: [],
})
.write();

// Exporting database instance
module.exports = db;