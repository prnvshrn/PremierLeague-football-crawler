var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cheerio = require('cheerio');
var url = 'https://www.premierleague.com/players/4823/players/stats';
var request = require('request');

app.use(bodyParser.json())

app.get('/', function(req, res){
	res.send('Hi There');
});

request(url, function(err,resp,body){
	if(err){
		console.log('Error retreiving results');
	}
	else{
		var $ = cheerio.load(body);
        var temp = $('.allStatContainer.statgoals');
        var temp2 = temp.text();
        console.log('Goals scored:' + temp2);
	}
});

app.listen(3000);
console.log('Started on port 3000');