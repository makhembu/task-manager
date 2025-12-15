
const express = require('express');
const app = express();


// Rendering the main page
const main = async (request, response) => {
    try {
        if (request.method === 'GET') {
            response.send("Hello world!");
        } else {
            response.send("Not a GET method!");
        }
    }
    catch (error) {
        console.log("An error occured on man page!");
    }
}


// Exporting all controllers
module.exports = {
    main,
}