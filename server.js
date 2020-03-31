/*!
 * @project Wavees API Node
 * @description Wavees API is a fully open-source set of free services,
 * that try to help new developers with their developer experience.
 * 
 * @post scriptum Word from creator:
 * I'm new to web-development, too.. And soo...
 */


/*!
 * @section Connecting modules
 * @description Here we'll connect all modules
 * and setup all of them.
 */
const express = require('express');
const app     = express();

const path    = require('path');

/*!
 * @section Connecting routes.
 * @description And now we just need to connect
 * all our routes...
 */
// We'll need one helper here..
const walk = require('./helpers/files/walk');

walk('./routes', (error, files) => {
  files.forEach((element) => {
    let route = require(element);
    let url = path.relative(__dirname + '/routes', element).split('.').shift();

    try {
      app.use(`/${url == "index" ? "" : url}`, route);
    }

    // Lock at this! It's a very complicated logging system!1!!
    catch(error) {
      console.log(error);
    }
  })
});

const listener = app.listen(3000, () => {
  console.log(`Node application is listening on: ${listener.address().port}`)
});