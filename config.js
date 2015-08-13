//File: config
var config;

module.exports = function () {
	if (config) return config;
	
	config = {
		appname: 'server_example',
		appdir: __dirname + '/app',
		logdir: __dirname + '/logs',
		port: 3000,
		host: 'localhost'
	};
	
	config.db = {
		//mongodb://username:password@dsXXXXX.mongolab.com:45077/databasename
		mongodb: "mongodb://localhost/examples"
	};

	config.logger = {
		all: config.logdir + '/' + config.appname + '.log',
		errors: config.logdir + '/' + config.appname + '-errors.log'
	};
	
	return config;
};
