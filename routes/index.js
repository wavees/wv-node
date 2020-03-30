/*!
 * @route /
 * @description Default route for application. I dunno
 * what it'll do.
 */

// Getting express router
const router = require('express').Router();

// Setting up router
router.get('/', (req, res) => {
  res.status(500).send(JSON.stringify({ message: "Currently in Development" }))
});

// Exporting router
module.exports = router;