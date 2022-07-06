const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen((port), () => console.log(`Rodando em http://localhost:${port}`));