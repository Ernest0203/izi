const express = require('express');
const router = express.Router();

const streams = require('./streams');
const testCtrl = require('../controllers/test-assoc')

router.get('/', (req, res) => res.json('Working!'));
router.get('/test', (req, res) => testCtrl.create(req, res));
router.use('/streams', streams);

module.exports = router;