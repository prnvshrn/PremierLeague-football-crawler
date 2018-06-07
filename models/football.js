var mongoose = require('mongoose');
var footballSchema = mongoose.Schema({
	name:{type: String},
	position:{type:String},
	goals:{type:String},
	shooting_accuracy:{type:String},
	heading_goals:{type:String},
	big_chances_miss:{type:String},
	error_to_goal:{type: String},
	interceptions:{type: String},
	blocked_shots:{type: String},
	big_chance_created:{type: String},
	assists:{type: String},
	tackle_success:{type: String},
	duel_won:{type: String},
	aerial_battle_won:{type: String},
	accurate_long_balls:{type: String}
})

var Football = module.exports = mongoose.model('Football', footballSchema);