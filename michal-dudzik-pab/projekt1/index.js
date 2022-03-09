"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    var num1 = +req.query.num1;
    var num2 = +req.query.num2;
    var operation = req.query.operation;
    if(operation=add)(
        res.send(add(num1, num2).toString())
    );

    if(operation=sub)(
        res.send(sub(num1, num2).toString())
    );

    if(operation=divide)(
        res.send(divide(num1, num2).toString())
    );

    if(operation=multiply)(
        res.send(multiply(num1, num2).toString())
    );
    
});
app.listen(3000);

//operacje matematyczne
function add(num1, num2) { return num1 + num2; };
function sub(num1, num2) { return num1 - num2; };
function divide(num1, num2) { return num1 / num2; };
function multiply(num1, num2) { return num1 * num2; };



//coś tu nie działa jest cały czas 15, jakaś stała liczba gdzieś utknęła, napraw
//http://localhost:3000/?num1=5&operation=multiply&num2=10