const { appendBlockChildren } = require('@notionhq/client/build/src/api-endpoints');
const {main} = require('../controllers/controller.js');
const express = require('express');
const app = express();
const Router = express.Router();

console.log(typeof(main));

Router.route('/').get(main);



module.exports = Router;