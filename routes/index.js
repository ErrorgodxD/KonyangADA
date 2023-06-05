var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/get/crypto', function(req, res){
  res.status(200).json({
    "message": "cardano"
  });
});


router.post('/api/post/crypto', function(req, res){
  res.status(200).json({ 
    "message": "post cardano"
  });
});



module.exports = router;
