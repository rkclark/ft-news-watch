import express from 'express';
const router = express.Router();
import ResultsRenderer from '../helpers/resultsRenderer';

/* GET search page. */
router.get('/search', function(req, res) {
  const resultsRenderer = new ResultsRenderer(req, res);
  resultsRenderer.render();
});

module.exports = router;
