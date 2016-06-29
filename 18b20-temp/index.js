var ds18b20 = require('ds18b20');
var myID= '28-800000045189';

ds18b20.sensors(function(err, ids) {
  console.log('ids: '+ids);
});

function getTemp()
{
// ... async call
ds18b20.temperature(myID, function(err, value) {
  console.log('Current temperature is', value);
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
