var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // Example data used to show how to loop through array in /views/index.jade
  // You may want to change this and/or create a new route and function
  // to call the actual Instagram API

  var myData = [{
    from: 'Person A',
    img: '/images/placeholder.gif'
  }, {
    from: 'Person B',
    img: '/images/placeholder.gif'
  }];

  res.render('index', { title: 'Tag Search', data: myData });
});

module.exports = router;