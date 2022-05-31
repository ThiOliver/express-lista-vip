var express = require('express');
const controller = require('../controllers/indexController')
var router = express.Router();

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
