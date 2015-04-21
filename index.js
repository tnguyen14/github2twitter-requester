'use strict';

var request = require('request');

request.get('http://github2twitter.herokuapp.com', function (err, response, body) {
	if (err) {
		console.log(err);
	} else {
		console.log('Sent request at ' + new Date());
	}
});
