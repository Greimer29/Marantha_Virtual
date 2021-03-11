const express = require('express');
const controller = require('../controllers/routerControler');
const router = express.Router();

const routerController = require('../controllers/routerControler')

router.get('/', controller.landing);
router.get('/castellano1y2', controller.castellano1y2);

module.exports = router;