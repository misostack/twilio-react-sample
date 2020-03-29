// const express = require('express');
// const app = express();
// const path = require('path');
// const AccessToken = require('twilio').jwt.AccessToken;
// const VideoGrant = AccessToken.VideoGrant;
// require('dotenv').config();

// const MAX_ALLOWED_SESSION_DURATION = 14400;
// const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
// const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
// const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/token', (req, res) => {
//   const { identity, roomName } = req.query;
//   const token = new AccessToken(twilioAccountSid, twilioApiKeySID, twilioApiKeySecret, {
//     ttl: MAX_ALLOWED_SESSION_DURATION,
//   });
//   token.identity = identity;
//   const videoGrant = new VideoGrant({ room: roomName });
//   token.addGrant(videoGrant);
//   res.send(token.toJwt());
//   console.log(`issued token for ${identity} in room ${roomName}`);
// });

// app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'build/index.html')));

// app.listen(8081, () => console.log('token server running on 8081'));


const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);