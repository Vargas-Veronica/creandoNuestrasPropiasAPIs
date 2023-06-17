const express = require('express');
const router = express.Router();
const {list, actor} = require('../../controllers/api/actorsController');

router.get('/api/actors', list);
router.get('/api/actors/:id', actor);

module.exports = router;