const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Create ninja schema model

const GeoSchema = new Schema({

	type:{
		type : String,
		default : "Point"
	},
	coordinates:{
		type: [Number],
		index: "2dsphere"
	}

})

const ninjaSchema = new Schema({
	name: {
		type : String,
		required : [true,'Name field is mandatory']
	},
	rank: {

		type: String
	},
	available: {
		type: Boolean,
		default : false
	},
	geometry : GeoSchema
})

const ninja = mongoose.model('ninja' , ninjaSchema)

module.exports = ninja;