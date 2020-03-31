/*!
 * @database Users
 * @description Users database, nothing strange..
 * Maybe
 */
// Connect modules
const low      = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter  = new FileSync('storage/users.json');
const db       = low(adapter);

// Default database structure
db.defaults({
  /*!
   * @structure
   * @description Possible user object structure
   * 
   * user: {
   *   _id: string, permanent,
   *   name: string, permanent,
   *   slug: string, changable,
   *   pincode: string, changable,
   * }
   */
  users: []
})
.write();

// Exporting database instance
module.exports = db;