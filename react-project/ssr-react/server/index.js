import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Boilerplate from './Boilerplate';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
   res.send(Boilerplate(req));
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
