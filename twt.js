const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

// make huge function that picks quote then tweets

// write function to pick a quote

var tweet = {
  status: "tweet"
}

client.post("statuses/update", tweet, posted);

function posted(error, data, response) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(data);
  }
}

// write setinterval
