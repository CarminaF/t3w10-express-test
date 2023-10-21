// Test the routes from server.js

const {app} = require('../src/server');

// import so we can manage the app/server
const request = require('supertest');

describe("Server root route exist and returns hello world", () => {
    test("Root route exists and returns status 200", async () => {
        const responseResult = await request(app).get("/");
        expect(responseResult.statusCode).toEqual(200);
    });
    test("Root route exists and returns hello world message", async () => {
        const response = await request(app).get("/");
        expect(response.body.message).toEqual("Hello World!");
    })
}) 

describe("POST to root route copes message in request body", () => {
    test('POST request.body.message of "Hello world" returns received value of "Hello world', async () => {
        
        let messageToSend = "Hello World!"
        
        const response = await request(app)
        .post("/")
        .send({
            message: messageToSend
        })

        expect(response.body.received).toEqual(messageToSend)
    })
})