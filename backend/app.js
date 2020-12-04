require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors = require('cors')

const session    = require("express-session");
const MongoStore = require('connect-mongo')(session);

const DBConnection = process.env.DB || 'mongodb://localhost/tierra-roja'

mongoose
  .connect(DBConnection, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(express.static(path.join(__dirname, 'public/build')));


// default value for title local
app.locals.title = 'Tierra Roja';


// Enable authentication using session + passport
app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(cors({
  origin: ["http://localhost:3001"],
  credentials: true
}))

require('./config/passport')(app);
    

const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const workRoutes = require('./routes/work');
app.use('/work', workRoutes);

const artistRoutes = require('./routes/artist');
app.use('/artist', artistRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/build/index.html'))
})      

module.exports = app;