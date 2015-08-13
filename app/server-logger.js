var bunyan = require('bunyan'),
    config = require('../config')(),
    log;
    
module.exports = function () {
    if (log) return log;
   
    log = bunyan.createLogger({
        name: config.appname,
        src: true,
        streams: [
            {
              level: 'info',
              stream: process.stdout
            },
            {
              level: 'info',
              path: config.logger.all
            },
            {
              level: 'error',
              path: config.logger.errors
            }
        ]
    });
    
    return log;
};