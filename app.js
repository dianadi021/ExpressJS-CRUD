/** @format */

const { RouterMain, RouterToken, RouterUsers, RouterArticles, RouterRolesUsers, RouterCategoryArticles } = require('./src/bridges');
const path = require('path');

const express = require('express');
const app = express();
const port = 9000;

try {
  // app.use('/uploads/images', express.static(path.join(__dirname, '/src/public/uploads/images')));
  app.set('views', path.join(__dirname, '/src/public/views'));
  app.set('view engine', 'ejs');
  app.use(express.static(path.join(__dirname, "/src/public/")));

  // Main API
  app.use(RouterMain);
  app.use(RouterToken);
  app.use(RouterUsers);
  app.use(RouterArticles);
  app.use(RouterRolesUsers);
  app.use(RouterCategoryArticles);

  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
  });
} catch (error) {
  console.log(`App listening on port Error: ${error}`);
}
