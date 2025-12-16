const express = require('express');
const app = express();
const Router = express.Router();
const { register } = require('../controllers/auth_controller.js');

Router.route('/').post(register);


module.exports = Router