

// jshint esversion: 6
const { response, request } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);
    var sign = (req.body.operator);
    if(sign == "+"){
        
        var result = (number1 + number2);
    }
    else if(sign == "-"){
        var result =(number1 - number2);
    }
    else if(sign == "*"){
        var result =(number1 * number2);
     
    }
    else if(sign == "/"){
        var result =(number1 / number2);
    }
    else{
        res.send("Invalid operator");
    }
    res.send("This is the answer to your question. " +result);
});


app.listen(3000, function () {
    console.log('Server is listening on port 3000!');
    }); 
     