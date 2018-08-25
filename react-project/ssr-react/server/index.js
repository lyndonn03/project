import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Boilerplate from './helpers/Boilerplate';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

   res.send(Boilerplate(req, store));
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
