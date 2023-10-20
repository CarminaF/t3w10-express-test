const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
//const HOST = '0.0.0.0';

app.get("/", (request, response) => {
    response.json({
        message: "Hello World!"
    })
})

module.exports = {
    app, PORT
}