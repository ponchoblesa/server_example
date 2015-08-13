# Server Example

Simple example of a server with a REST service and mongo db which also serves static files. This server provide an organized framework with tests and logs, avoiding long files of unorganized code and a decoupled structure.

## Motivation

The aim of this project is to provide a stable framework for a server which can be used as a template for complex programs. This template contains also one example to show how this framework should be used.

## Folder structure

    -> main
    	|_ app
    		|_ handlers
    			|_ index.js
    			|_ rest_object_handler_1.js
    			|_ rest_object_handler_2.js
    			|_ ...
    		|_ models
    			|_ index.js
    			|_ rest_object_data_model_1.js
    			|_ rest_object_data_model_1.js
    			|_ ...
    		|_ routes.js
    		|_ server.js
    	|_ logs
    		|_ appname.log
    		|_ appname-error.log
    	|_ public
    	    |_ index.html
    	|_ test
    		|_ handlers
    			|_ test_for_object_handler_1.js
    			|_ test_for_object_handler_2.js
    			|_ ...
    		|_ models
    			|_ test_for_object__data_model_1.js
    			|_ test_for_object__data_model_2.js
    			|_ ...
    		|_ test_routes.js
        |_ config.js
    	|_ index.js
    	|_ package.json


## Installation and usage

Simply download the repository and install its dependences

    git clone [repository address]
    npm install

Since this project has been created as a template for the development of a server, maybe it is also useful to install the development dependences of the project in order to create and execute the tests. This has to be manually:

    npm install assert && npm install mocha && npm install should && npm install supertest
    
All the particular information of the project is insolated in its configuration file. Complete the file config.js according your database configuration, name of the project, desired logging folders...

For logging of events in server, we use bunyan. Download it globally and use its client to show the messeges of the server.Contributors

    npm install -g bunyan

### Example of ussage

Once you have all the files and its dependences, you are ready to run the server example. First you need to have running the mongo database

    sudo mongod

After that, navigate to the project folder and execute this command to run the server

    node index.js | bunyan

Then open a browser and load the index page in localhost:3000

## Tests

To execute test simply type

    npm test
    
You have to have installed mocha. If you don't have it

    npm install -g mocha
   
## Contributors

By the moment the only contributor is me [Alfonso Blesa]. Feel free of sending suggestions or complete this server template.

##License

This project is under MIT License Copyright (c) 2015 Alfonso Blesa <ablesaro@gmail.com>
