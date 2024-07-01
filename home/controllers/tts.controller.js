const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports.postTTS = async (req, res) => {
    const text = req.body.text;
    const filename = 'output.wav';
  
    //execution de la commande espeak pour generer la synthese vocal et la mettre en francais
    exec(`espeak-ng -v fr "${text}" --stdout > ${filename}`, (error) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).send('Error generating speech');
      }
      res.sendFile(path.join(__dirname,'..','..', filename));
    });
  }