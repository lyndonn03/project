import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Boilerplate from './Boilerplate';
import App from './react/App';

const app = express();

app.use(express.static('public'));

app.get('/*', (req, res) => {
   const DOM = renderToString(< App />);
   res.send(Boilerplate( 'react-ssr', DOM));
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
