import express from 'express';
const router = express.Router();
import renderResults from '../helpers/renderResults';

/* GET home page. */
router.get('/', function(req, res) {
  renderResults(req,res);
});

module.exports = router;
