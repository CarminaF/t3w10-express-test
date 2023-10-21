const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
//const HOST = '0.0.0.0';

app.use(express.json());

// Config above
// Routes below
app.get("/", (request, response) => {
    response.json({
        message: "Hello World!"
    })
})

app.post("/", (request, response) => {
    response.json({
        received: request.body.message
    });
})

module.exports = {
    app, PORT
}