"use strict";

const express = require('express');
const app = express();
const port = 3000;

// app.set('view engine', 'pug');
app.use('/public/css', express.static(__dirname + '/public/css'));
app.use('/public/images', express.static(__dirname + '/public/images'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/courses", (req, res) => {
    res.sendFile(__dirname + '/views/courses.html');
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

app.post("/thanks", (req, res) => {
    res.sendFile(__dirname + '/views/thanks.html');
});

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

app.use((error, req, res, next) => {
    res.status(404).sendFile(__dirname + '/views/error.html');
});

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
});
