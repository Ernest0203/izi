const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/streams');

router.get('/', (req, res) => ctrl.read(req, res));
router.post('/', (req, res) => ctrl.write(req, res));

module.exports = router;