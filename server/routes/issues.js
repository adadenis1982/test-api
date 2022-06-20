const router = require('express').Router();
const { getIssues } = require('../controllers/issues');

router.get('/:owner/:repo', getIssues);

module.exports = router;

