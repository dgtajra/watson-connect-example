/*!
  Author: Yukashimi
  Date: 18/04/2018
  File: watson-connect.js
  Watson tutorial: https://console.bluemix.net/docs/services/conversation/develop-app.html#construindo-um-aplicativo-cliente
*/

var prompt = require('prompt-sync')();
var actions = require('./actions.js');
var config = require('./config.js');

// Start conversation with empty message.
config.service.message({
  workspace_id: config.workspace_id
  }, processResponse);

// Process the service response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  actions.logIndent(response);
  
  // Checks if the conversation ended, if not go on
  if(!actions.check(response)){
    var newMessageFromUser = prompt('>> ');
	config.service.message({
      workspace_id: config.workspace_id,
	  input: {text: newMessageFromUser},
	  context: response.context,
	}, processResponse)
  }
}
/*
json action example
"actions": [
    {
      "name":"exampleWeather",
      "type":"client",
      "parameters": {
        "date":"$date",
        "location":"$location"
      },
      "result_variable": "context.my_forecast"
    }
  ],
  "context": {
    "skip_user_input": true
  }
*/