/*!
 * @database Notifications
 * @description All kind of notifications, that can apply 
 * to users, node notifications, admin dashboard and much more.
 */
// Connect modules
const low      = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter  = new FileSync('storage/notifications.json');
const db       = low(adapter);

// Default database structure
db.defaults({
  node: [],

  dashboard: [],
})
.write();

// Exporting database instance
module.exports = db;