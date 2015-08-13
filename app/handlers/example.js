//File: handlers/example.js
var mongoose = require('mongoose'),
	model = mongoose.model('example'),
	log = require('../server-logger')();

//GET - Return all data in the DB
exports.findAll = function(req, res) {
	log.info(req, 'Getting all examples');
	model.find(function(err, data) {
		if(err) {
			log.err(err, err.message);
			return res.status(500).send(err.message);
		}
		log.info(data, 'Sending all examples');
		res.status(200).jsonp(data);
	});
};

//GET - Return the data by ID
exports.findById = function(req, res) {
	log.info(req, 'Getting example by id');
	model.findById(req.params.id, function(err, obj) {
		if(err) {
			log.err(err, err.message);
			return res.status(500).send(err.message);
		}
		log.info(obj, 'Sending example '+ req.params.id);
		res.status(200).jsonp(obj);
	});
};

//POST - Insert a new data in the DB
exports.add = function(req, res) {
	var obj = new model({
		title:      	req.body.title,
    	description:	req.body.description
	});
	log.info(req, 'Adding new example');
	obj.save(function(err, obj) {
		if (err) {
			log.err(err, err.message);
			return res.status(500).send(err.message);
		}
		log.info(obj, 'Added new example');
		res.status(200).jsonp(obj);
	});
};

//PUT - Update a register already exists
exports.update = function(req, res) {
	log.info(req, 'Updating example '+ req.params.id);
	
	model.findById(req.params.id, function(err, obj) {
		if (err) {
			log.err(err, err.message);
			return res.status(500).send(err.message);
		}
		
		obj.title = req.body.title;
    	obj.description = req.body.description;

		obj.save(function(err, obj) {
			if (err) {
				log.err(err, err.message);
				return res.status(500).send(err.message);
			}
			log.info(obj, 'Updated example');
			res.status(200).jsonp(obj);
		});
	});
};

//DELETE - Delete a register with specified ID
exports.remove = function(req, res) {
	log.info(req, 'Remove example');
	model.findById(req.params.id, function(err, obj) {
		if (err) {
			log.err(err, err.message);
			return res.status(500).send(err.message);
		}
		
		if(!obj) {
			log.err(req, 'Cannot find example '+req.params.id);
			return res.status(500).send('Cannot find example '+req.params.id);
		}
		obj.remove(function(err) {
			if (err) {
				log.err(err, err.message);
				return res.status(500).send(err.message);
			}
			res.status(200).jsonp({});
		});
	});
};

