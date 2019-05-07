const express = require('express')
require('express-async-errors')
const path = require('path');
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const people = require('./json/people.json');

const indexRouter = require('./routers/index.router');
const aboutRouter = require('./routers/about.router');
const servicesRouter = require('./routers/services.router');
const contactRouter = require('./routers/contact.router');
const adminRouter = require('./routers/admin.router')

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/technomin'

const PORT = process.env.PORT || 80

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.use('/admin', adminRouter)
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/services', servicesRouter);
app.use('/contact', contactRouter);
app.use('/post-message', contactRouter.post);
app.get('/profile', (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});

const run = async () => {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true
  })
  await app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
  })
}

run()
