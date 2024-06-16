const express = require('express');
const { saveForm, refreshData } = require('../controllers/formController');
const router = express.Router();

router.post('/save', saveForm);
router.get('/refresh', refreshData);

module.exports = router;
