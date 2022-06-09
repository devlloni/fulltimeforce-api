const express = require('express');
const router = express.Router();

const repoController = require('../controllers/repoController');

router.get('/:reponame', repoController.showRepoInfo);

router.get('/commits/:username/:reponame',  repoController.showCommitsInfo);

module.exports = router;