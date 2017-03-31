import express from 'express';
const router = express.Router();
import ResultsRenderer from '../helpers/resultsRenderer';

router.get('/', function(req, res) {
  const resultsRenderer = new ResultsRenderer(req, res);
  resultsRenderer.render();
});

module.exports = router;
