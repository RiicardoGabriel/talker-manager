const express = require('express');
const bodyParser = require('body-parser');
const routerTalker = require('./router/routerTalker');
const routerTalkerId = require('./router/routerTalkerId');
const routerLogin = require('./router/routerLogin');
const routerTalkerPost = require('./router/routerTalkerPost');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(routerTalker);
app.use(routerTalkerId);
app.use(routerLogin);
app.use(routerTalkerPost);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
