const express = require ('express');
const router = express.Router();
const {saveContactMessage} = require ('../controllers/contact-controller');
router.post('/contact' , saveContactMessage);
module.exports = router;