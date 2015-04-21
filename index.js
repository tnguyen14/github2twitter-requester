'use strict';

var request = require('request');

if (!process.env.GITHUB2TWITTER_URL) {
	throw new Error('No GITHUB2TWITTER_URL configured.');
}

request.get(process.env.GITHUB2TWITTER_URL, function (err, response, body) {
	if (err) {
		console.log(err);
	} else {
		console.log('Sent request at ' + new Date());
	}
});
