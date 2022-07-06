const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const routes = require('./src/routes/router');

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen((port), () => console.log(`Rodando em http://localhost:${port}`));
