import express from 'express';
const router = express.Router();
import ResultsRenderer from '../helpers/resultsRenderer';



/* GET home page. */
router.get('/', function(req, res) {
  const resultsRenderer = new ResultsRenderer(req, res);
  resultsRenderer.render();
});

module.exports = router;
