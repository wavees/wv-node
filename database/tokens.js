/*!
 * @database Tokens
 * @description All kind of tokens, for example: user tokens,
 * application tokens and much more.
 */
// Connect modules
const low      = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter  = new FileSync('storage/tokens.json');
const db       = low(adapter);

// Default database structure
db.defaults({
  user: [],

  applications: [],
})
.write();

// Exporting database instance
module.exports = db;