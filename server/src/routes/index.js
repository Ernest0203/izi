const express = require('express');
const router = express.Router();

const notes = require('./notes');

router.get('/', (req, res) => res.json('Working!'));
router.use('/notes', notes);

module.exports = router;