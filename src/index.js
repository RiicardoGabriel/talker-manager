const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/routerTalker');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(router);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
