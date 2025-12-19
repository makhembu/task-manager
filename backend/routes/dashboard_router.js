const express = require('express');
const router = express.Router();
const dashboard_controller = require('../controllers/dashboard_controller.js');
const authorization = require('../middelewares/authorization.js');

// Dashboard page
router.get('/dashboard', authorization, dashboard_controller);


module.exports = router;