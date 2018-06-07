var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var mongoose = require('mongoose');
Football = require('./models/football');
mongoose.connect('mongodb://'); // Your mongodb link is put here
var db = mongoose.connection;

app.use(bodyParser.json())


var promise = new Promise(function(resolve, reject) {
  resolve();
});

promise.then(function(){
	// Change value of the variable a. Try doing it in iterations of 500 or around 
	for(var a=1000; a<1500; a++){
	var url = 'https://www.premierleague.com/players/'+a+'/players/stats';
	request(url, function(err,resp,body){
		if(err){
			console.log('Error retreiving results');
		}
		else{
			var $ = cheerio.load(body);
			// This condition is for eliminating players who did not play after 05/06 season
			if($('.allStatContainer.stattotal_pass').text().trim().split("\n")[0] != '0' && $('.sideWidget.playerIntro').text().trim().split("Position")[1])
			{	
	        Football.create({name: $('.playerDetails').find('.name').text(),
	    	position:$('.sideWidget.playerIntro').text().trim().split("Position")[1],
	    	goals:$('.allStatContainer.statgoals').text().trim().split("\n")[0],
	    	shooting_accuracy:$('.allStatContainer.statshot_accuracy').text().trim().split("\n")[0],
			heading_goals:$('.allStatContainer.statgoals').text().trim().split("\n")[0],
			big_chances_miss:$('.allStatContainer.statbig_chance_missed').text().trim().split("\n")[0],
			error_to_goal:$('.allStatContainer.staterror_lead_to_goal').text().trim().split("\n")[0],
			interceptions:$('.allStatContainer.statinterception').text().trim().split("\n")[0],
			blocked_shots:$('.allStatContainer.statblocked_scoring_att').text().trim().split("\n")[0],
			big_chance_created:$('.allStatContainer.statbig_chance_created').text().trim().split("\n")[0],
			assists:$('.allStatContainer.statgoal_assist').text().trim().split("\n")[0],
			tackle_success:$('.allStatContainer.stattackle_success').text().trim().split("\n")[0],
			duel_won:$('.allStatContainer.statduel_won').text().trim().split("\n")[0],
			aerial_battle_won:$('.allStatContainer.stataerial_won').text().trim().split("\n")[0],
			accurate_long_balls:$('.allStatContainer.stataccurate_long_balls').text().trim().split("\n")[0]
	    	}, function(err, small){
	        	if (err) console.log(err);	
	        })

	    	}
		}
	});
	}
});

app.listen(3000);
console.log('Started on port 3000');