const config = require('./config.json');
const axios = require('axios');

const twitter_api = axios.create({
	baseURL: config.base_url,
	headers: {
      'Authorization': 'Bearer ' + config.auth.bearer_token
    }
});

twitter_api.get('statuses/user_timeline.json?count=100&screen_name=nishanth_vijyn')
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.log("error");
	});