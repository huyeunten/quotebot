const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

// Quote pool. See source.txt for sources
const quotes = [
  "The first of the line is tied to a tree and the last is being eaten by the"
  + " ants.",
  "This place is pretty dead... by which I mean there's nothing to kill.",
  "I wish my love was more beautiful.",
  "To us-- richer and cleverer than everyone else!",
  "Are you deaf, or just stupid? When did I give you the right... to issue"
  + " your own orders?",
  "The clan is my blood and the pillar is my master. I have a lot of regrets"
  + " in life, but those oaths aren't one of them.",
  "The gods are cruel not because they make us work. They are cruel because"
  + " they allow us to hope.",
  "War doesn’t determine who’s right. War determines who remains.",
  "Pick a god and pray!",
  "Last time, they spent eight hundred years running towards each other."
  + " This time, it only took an instant to fall into each other's embrace.",
  "Uh, you think ya big boi, throwing three stacks I'ma show you how to ball,"
  + " you a mismatch Opinionated but I'm always spitting straight facts"
  + " Throwback, I might throw this on an eight track",
  "Because people don't have wings, we look for ways to fly.",
  "“Nah, if she’s the rose, he can be her thorn.” Calo snapped his fingers."
  + " “The Thorn of Camorr! Now, that’s got some shine to it!”",
  "“Oh, hell,” Kelsier said. “There’s actually a God?” “Yes.” Kelsier"
  + " decked him.",
  "Remember: when humans ascend, they are still human; when they fall,"
  + " they are still human.",
  "No water is enough when you have crossed the sea; no cloud is beautiful"
  + "but that which crowns the peak",
  "I will change fate I don’t possess. My fate is up to me and not the"
  + " heavens.",
  "Work, stage, earth, ONEUS",
  "The moon looks nice today",
  "And I'm not cool and I'm not smart and I can't even parallel park",
  "If you could be born again, what would you be? A potato",
  "You make a pinkie promise, you keep it all your life. You break a pinkie"
  + " promise, I throw you on the ice. The cold will kill the pinkie that once"
  + " betrayed your friend, the frost will freeze your tongue off so you never"
  + " lie again.",
  "It was the words Hua Cheng had lived by since he was a child, and eternally"
  + " thereafter beyond his death. 'I am forever your most devoted believer.'",
  "I write these words in steel, for anything not set in metal cannot be"
  + " trusted."
];

// Tweet something once a day
setInterval(function() { sendTweet(quotes); }, 86400000);

function sendTweet(quotes) {
  var tweet = pickQuote(quotes);

  // Pick quote by generating random number as array index
  function pickQuote(quotes) {
    var numQuotes = quotes.length;
    var randNum = Math.floor(Math.random() * numQuotes);
    return quotes[randNum];
  }

  // Set tweet
  tweet = {
    status: tweet
  }

  // Tweet with Twitter API
  client.post("statuses/update", tweet, posted);

  // Check for errors
  function posted(error, data, response) {
    if (error) {
      console.log(error);
    }
  }
}
