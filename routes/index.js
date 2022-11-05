const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Home');

const router = express.Router();
const Die = require('../db/models/die');
const DieCont = require('../views/DieCont');

/* GET home page. */
router.get('/', (req, res) => {
  const home = React.createElement(Home, req.app.locals);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.post('/rolls', (req, res) => {
  const { sides } = req.body;
  const die = new Die(Number(sides));

  // const home = React.createElement(Home, {
  //   ...req.app.locals,
  //   die,
  //   roll: die.roll(),
  // });
  // const html = ReactDOMServer.renderToStaticMarkup(home);
  // res.write('<!DOCTYPE html>');
  // res.end(html);
  const dieCont = React.createElement(DieCont, { roll: die.roll() });
  const html = ReactDOMServer.renderToStaticMarkup(dieCont);
  res.end(html);
  // res.json({ message: 'Успех' });
});

module.exports = router;
