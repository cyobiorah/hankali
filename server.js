// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files....
// app.use(express.static(__dirname + '/dist/hankali'));

// // Send all requests to index.html
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/hankali/index.html'));
// });

// // default Heroku PORT
// app.listen(process.env.PORT || 3000);

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/hankali'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/hankali/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);