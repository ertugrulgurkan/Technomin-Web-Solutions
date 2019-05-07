const express = require('express');

const router = express.Router();
var Message = require('../models/message.model');

router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    validation: '',
  });
});




router.post = function(req,res){
var myData  = new Message(req.body);
myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
}

module.exports = router;


