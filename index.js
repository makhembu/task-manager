const PORT = 3000;
const express = require('express');
const app = express();

const routes = require('./backend/routes/routes.js');

app.use('/', routes);




app.listen(PORT, (request, response) => {
    console.log(`Server is running at ${PORT}...`);
});


