const express = require('express')
const router = express.Router()
const ninja = require('../model/ninjas')

router.get('/ninjas', function(req , res ,next){

	//next means move on to next middleware
	res.send({type: "get"})

})

router.post('/ninjas', function(req , res , next){

	ninja.create(req.body).then(function(ninja){

		res.send(ninja);
	}).catch(next)

})

router.put('/ninjas/:id', function(req , res,next){

	console.log(req.body)
	res.send({type: "put"})


})

router.delete('/ninjas/:id', function(req , res,next){

	res.send({type: "delete"})

})

module.exports = router