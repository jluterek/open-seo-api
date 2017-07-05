'use strict'
const express = require('express');
const app = express();
const http = require('http');
const request = require('request');
const density = require('density');
const seochecker = require('seo-checker');
const psi = require('psi');
const validator = require('html-validator');

app.use(function(req, res, next) {
  var allowedOrigins = ['http://127.0.0.1:3000', 'https://www.open-seo.org', 'http://localhost:3000'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/details', (req, res, next) => {
    let url = req.query.url;
    var page = seochecker.load(url, function(response) {
        if(!response) { // response will be false on error
            res.json('error');
            // error 
        } else {
            res.json(seochecker.meta(response));
        }
    });
});

app.get('/keywords', (req, res, next) => {
    let url = req.query.url;
    request("http://" + url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        //res.json(body);
        res.json(density(body).getDensity());
    });
});

app.get('/headers', (req, res, next) => {
    let url = req.query.url;
    let options = {method: 'HEAD', host: url, port: 80, path: '/'};
    let request = http.request(options, function(urlRes) {
        res.json(urlRes.headers);
    });
    request.end();
});

app.get('/validatehtml', (req, res, next) => {
    let url = req.query.url;

    const options = {
        url: 'https://' + url,
        format: 'json'
    }
    
    validator(options).then((data) => {
        res.json(data.messages);
    })
    .catch((error) => {
        res.json(error);
    })
});

app.get('/speed', (req, res, next) => {
    let url = req.query.url;
    psi(url).then(data => {
        res.json(data);
    });
});


module.exports = app; // export your app so aws-serverless-express can use it