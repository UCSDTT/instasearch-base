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

// var feed = new Instafeed({
//         get: 'tagged',
//         tagName: 'awesome',
//         clientId: '4d24d9d53a694f7b83bd4f2d314651c0',
//         template: '<a href="{{link}}"><img src="{{image}}" /></a>'
// });
// feed.run();

module.exports = router;