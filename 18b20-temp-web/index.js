var express = require('express');
var app = express();

var ds18b20 = require('ds18b20');
var myID= '28-0114549ea9ff';
var temperature = 0;

ds18b20.sensors(function(err, ids) {
  console.log('ids: '+ids);
});

function getTemp()
{
// ... async call
ds18b20.temperature(myID, function(err, value) {
  temperature = value;
  console.log('Current temperature is', temperature);
});
}

// ... or sync call
//console.log('Current temperature is' + ds18b20.temperatureSync(myID));

// default parser is the decimal one. You can use the hex one by setting an option
//ds18b20.temperature(myID, {parser: 'hex'}, function(err, value) {
//  console.log('Current temperature is', value);
//});

//console.log('Current temperature is' + ds18b20.temperatureSync('10-00080283a977', {parser: 'hex'}));

setInterval(getTemp, 1000);

app.use(express.static('public'));
/*
app.get('/', function (req,res){
  res.send('<HEAD><META HTTP-EQUIV="refresh" CONTENT="1"</HEAD><BODY><H1>Current temperature: '+temperature+'</H1></BODY>');
});
*/

app.get('/temp', function(req, res){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "X-Request-With");
  res.send(''+temperature);
});

app.listen(80, function(){
  console.log('listening on port 80');
});
