import { report } from "process"

const express = require('express')  
const app = express()  
app.get('/', function (req, res) {  
  const num1 = +req.query.num1
  const num2 = +req.query.num2
  const operation = req.query.operation
  res.send(operation.toString(add(num1,num2)))
})  
app.listen(3000)  


//operacje matematyczne
const add : Function = (num1: number, num2: number): number => num1 + num2;
const sub : Function = (num1: number, num2: number): number => num1-num2;
const divide : Function = (num1: number, num2: number): number => num1 / num2;
const multiply : Function = (num1: number, num2: number): number => num1 * num2;

