/*!
  Author: Yukashimi
  Date: 18/04/2018
  File: config.js
*/

var AssistantV1 = require('watson-developer-cloud/assistant/v1');
var exports = module.exports = {};
const WORKPLACE_ID = 'WORKPLACE_ID'

// Set up Assistant service wrapper.
exports.service = new AssistantV1({
  username: 'USERNAME',
  password: 'PASSWORD',
  version: '2018-02-16'
});

exports.workspace_id = WORKPLACE_ID;