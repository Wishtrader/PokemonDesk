// eslint-disable-next-line no-use-before-define
import React from 'react';
import Hapi from '@hapi/hapi';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

import ReactDom from 'react-dom/server';
import { setPath } from 'hookrouter';

import App from '../app';

const inert = require('@hapi/inert');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(inert);

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.js')),
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handler: (request, h) => {
      setPath(request.path);
      const pathIndexHTML = path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathIndexHTML, 'utf-8'));
      const result = ReactDom.renderToString(<App />);
      const page = template({
        content: result,
      });
      return page;
    },
  });

  await server.start();
  // eslint-disable-next-line no-console
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
  process.exit(1);
});

init();
