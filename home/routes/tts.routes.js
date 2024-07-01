const express = require('express');
const { postTTS } = require('../controllers/tts.controller');
const router = express.Router();

//route pour generer synthese vocal
router.post("/", postTTS);

module.exports = router 