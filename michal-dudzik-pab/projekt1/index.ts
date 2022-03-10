"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    const num1: number = +req.query.num1;
    const num2: number = +req.query.num2;
    const operation: string = req.query.operation;

    switch (operation) {
        case "add":
            res.send(add(num1, num2).toString())
            break;

        case "sub":
            res.send(sub(num1, num2).toString())
            break;    
        
        case "divide":
            res.send(divide(num1, num2).toString())
            break; 

        case "multiply":
            res.send(multiply(num1, num2).toString())
            break; 
    }
    
});
app.listen(3000);

//operacje matematyczne
function add(num1, num2) { return num1 + num2; };
function sub(num1, num2) { return num1 - num2; };
function divide(num1, num2) { return num1 / num2; };
function multiply(num1, num2) { return num1 * num2; };

