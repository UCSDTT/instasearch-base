var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  console.log('Query: ' + req.query.search);

  Instagram.tags.recent({
    name: req.query.search,
    complete: function(data){
      res.render('index', {
        title: 'Jesse\'s Tag Search',
        search: req.query.search,
        data: data,
      });
      console.log('Data from Instagram fetched.');
    }
  });

});


module.exports = router;
