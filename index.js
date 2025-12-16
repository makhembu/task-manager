require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./backend/database/db.js');
const routes = require('./backend/routes/routes.js');
const register = require('./backend/routes/auth_router.js');


// Parsing json data
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/', routes);
app.use('/api/register', register);


db();
app.listen(PORT, (request, response) => {
    console.log(`Server is running at ${PORT}...`);
});


