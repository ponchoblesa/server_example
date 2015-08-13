var config = require('./config')(),
    server = require('./app/server'),
    mongoose = require('mongoose'),
    log = require('./app/server-logger')();
    process.chdir(__dirname); //process.cwd() doesn't work sometimes. Updating current path for those cases

log.info('Logger started. Connecting to MongoDB...');

mongoose.connect(config.db.mongodb, function(err, res){
	if(err) {
	    log.fatal(err, 'Imposible to connect the database');
	    throw err;
	}
});

log.info('Successfully connected to MongoDB. Starting web server...');
server.start();
log.info("Successfully started web server. Waiting for incoming connections...");
