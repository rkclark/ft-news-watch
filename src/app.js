import 'dotenv/config';
import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import hbs from './server/helpers/handleBarsSetup';
import fs from 'fs';
import index from './server/routes/index';
import search from './server/routes/search';
import headlinesAPI from './server/routes/headlinesAPI';

const app = express();
// view engine setup

const partialsDir = __dirname + '/server/views/partials'; // eslint-disable-line

const filenames = fs.readdirSync(partialsDir);

filenames.forEach((filename) => {
  const matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  const name = matches[1];
  const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

app.set('views', path.join(__dirname, 'server/views')); // eslint-disable-line
app.set('view engine', 'hbs');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // eslint-disable-line

app.use(headlinesAPI);
app.use(index);
app.use(search);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
