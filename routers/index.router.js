const express = require('express');
const people = require('../json/people.json');
var Posts = require('../models/post.model');

const  router = express.Router();
router.use(express.static(__dirname + '/public'));

///* GET home page. */
//router.get('/', (req, res) => {
//  Posts.find({}, function(err, posts) {
//    res.render('index', {
//      title: 'Homepage',
//      people: people.profiles,
//      posts: posts    });
// });
//  //res.render('index', {
//  //  title: 'Homepage',
//  //  people: people.profiles,
//  //  posts: posts
//  //});
//});

router.get('/', (req, res) => {
  Posts.find((err, posts) => {
    if (err) {
      console.log("Error: " + err);
    } 
    else {
      res.render('index', {
        title: 'Homepage',
        people: people.profiles,
        posts: posts,
      });
    }
  });
});


module.exports = router;
