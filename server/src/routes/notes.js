const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/notes');

router.get('/', (req, res) => ctrl.getNotes(req, res));
router.post('/', (req, res) => ctrl.createNote(req, res));
router.delete('/', (req, res) => ctrl.removeNote(req, res));

module.exports = router;