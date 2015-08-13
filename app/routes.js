//File: routes

exports.setup = function (router, handlers) {

	router.route('/api/examples')
		.get(handlers.example.findAll)
		.post(handlers.example.add);

	router.route('/api/examples/:id')
		.get(handlers.example.findById)
		.put(handlers.example.update)
		.delete(handlers.example.remove);

    return router;
};