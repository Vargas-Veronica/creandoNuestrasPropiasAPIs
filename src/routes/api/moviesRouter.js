const express = require('express');
const router = express.Router();
const {list, detail} = require('../../controllers/api/moviesController');

router.get('/api/movies', list);
router.get('/api/movies/:id', detail);

module.exports = router;