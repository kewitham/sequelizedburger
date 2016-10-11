var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  res.redirect('/burgers');
});

// models.burger.findAll({
// 	include: [models.User]
// })
// 	.then (function (burgers) {
// 	res.render('burgers/index', {
// 		user_id: req.session.user_id,
// 		email: req.session.user_email,
// 		logged_in: req.session.logged_in,
// 		burgers: burgers
// 	});
//  	});
//  });

router.post('/create', function (req, res) {
	models.burger.create({
		name: req.body.burger_name,
		devoured: req.body.devoured,
		user_id: req.session.user_id
	});
	.then(function(){
		res.redirect('/');
	});
});

router.put('/update/:id', function (req, res) {
	//var condition = 'id = ' + req.params.id;

	//console.log('condition', condition);

	models.burger.update(
		{
			devoured: req.body.devoured
		}, 
		{
			where:{id:req.params.id}
		})
		.then(function (result) {
		res.redirect('/');
	}, function(rejectedPromiseError){

	});
});

router.delete('/delete/:id', function (req, res) {
	//var condition = 'id = ' + req.params.id;

	models.burger.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function () {
		res.redirect('/');
	});
});

module.exports = router;