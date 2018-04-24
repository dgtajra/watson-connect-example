/*!
  Author: Yukashimi
  Date: 18/04/2018
  File: actions.js
*/
var c = 0;
var fs = require('fs');
function writeLog(text){
  fs.appendFile("log.txt", ("[DATE] " + Date.now() + "\nOutput: " + text + "\n"),
    function(err){
      if (err) throw err;
	});
}

var exports = module.exports = {};

exports.check = function(response){
  // Check the action flags here
  if(response.output.action === 'some_action'){
    /* do whatever you need here*/
    return false;
  }
  else if(response.output.action === 'another_action'){
	/* do more stuff here */
	return false;
  }
  
  else if(response.output.action === 'end_conversation'){
    console.log(response.output.text[0]);
    return true;
  }
  // Display outputs not related to actions
  else if(response.output.text.length != 0){
	/* This is for responses without actions
	   such as a simple hi */
    console.log(response.output.text[0]);
	//writeLog(response.output.text[0]);
    return false;
  }
}

exports.logIndent = function(response){
  // Logs the detected intents
  if(response.intents.length > 0){
    console.log('Detected intent was #' + response.intents[0].intent);
  }
}

