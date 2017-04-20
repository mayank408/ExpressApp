const express = require('express')
const router = express.Router()
const ninja = require('../model/ninjas')

router.get('/ninjas', function(req , res ,next){

	//next means move on to next middleware
	ninja.geoNear(
		{type:"Point" , coordinates : [req.query.lan , req.query.log]},
		{maxDistance : 100000 , spherical : true}
	).then(function(ninja){
		res.send(ninja)
	})

})

router.post('/ninjas', function(req , res , next){

	ninja.create(req.body).then(function(ninja){

		res.send(ninja);
	}).catch(next)

})

router.put('/ninjas/:id', function(req , res,next){

	ninja.findByIdAndUpdate({_id:req.params.id}).then(function(){
		console.log('updated')
		ninja.findOne({_id:req.params.id}).then(function(ninja){
			console.log(ninja)
			res.send(ninja)
		})
	})

})

router.delete('/ninjas/:id', function(req , res,next){

	ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
		res.send(ninja)
	})

})

module.exports = router