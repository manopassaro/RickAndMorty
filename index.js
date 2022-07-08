const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const routes = require('./src/routes/router');
const connectToDatabase = require('./src/database/database');
require("dotenv").config()

app.use(express.json());
app.use(cors());
app.use(routes);

connectToDatabase();

app.listen((port), () => console.log(`Rodando em http://localhost:${port}`));
