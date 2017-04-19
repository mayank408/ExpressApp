const express = require('express')
const router = express.Router()

router.get('/ninjas', function(req , res){

	res.send({type: "get"})

})

router.post('/ninjas', function(req , res){

	res.send({type: "post",
	name : req.body.name,
	rank : req.body.rank})

})

router.put('/ninjas/:id', function(req , res){

	console.log(req.body)
	res.send({type: "put"})


})

router.delete('/ninjas/:id', function(req , res){

	res.send({type: "delete"})

})

module.exports = router