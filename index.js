const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser'); // para parsear las peticiones POST
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 dias en ms
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express esta proporcionando los assets de producción
  // como main.js o main.cookie-session
  app.use(express.static('client/build'));
  // Express esta proporcionando  index.html
  // si este no reconoce la ruta
  const path = require('path');
  app.get(*,(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
