const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

app.use("/speak", require("./home/routes/tts.routes"))

//Demarage du serveur express
app.listen(port, () => {
  console.log(`TTS server running at http://localhost:${port}`);
});
