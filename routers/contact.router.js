const express = require('express');

const router = express.Router();
var Message = require('../models/message.model');

router.get('/', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact',
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


//// Send email
//router.post('/', (req, res) => {
//  const { name, email, message } = req.body;
//
//  if (!name || !email || !message) {
//    res.render('contact', {
//      pageTitle: 'Contact',
//      validation: { type: 'danger', message: 'All contact form fields are required' },
//    });
//  } else if (!validator.validate(email)) {
//    res.render('contact', {
//      pageTitle: 'Contact',
//      validation: { type: 'danger', message: 'Invalid Email' },
//    });
//  } else {
//    const transporter = nodemailer.createTransport({
//      service: 'Gmail',
//      auth: {
//        user: process.env.GMAIL_USER,
//        pass: process.env.GMAIL_PASS,
//      },
//    });
//
//    const mailOptions = {
//      from: process.env.MAIL_SENDER,
//      to: process.env.MAIL_RECIPIENT,
//      subject: 'Hello fro PC express shop',
//      text: `You have a submission from ...Name: ${name} Email: ${email} Message ${message}`,
//      html: `<p>You have a submission from ...</p> <ul><li>Name: ${name}</li> <li> Email: ${email} </li> <li>Message ${message}</li></ul>`,
//    };
//
//    transporter.sendMail(mailOptions, (err, info) => {
//      if (err) {
//        console.log(err);
//      } else {
//        console.log(`Message send:  ${info.response}`);
//        res.render('contact', {
//          pageTitle: 'Contact',
//          validation: { type: 'success', message: 'Message has been sent' },
//        });
//      }
//    });
//  }
//});

