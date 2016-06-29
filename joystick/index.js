var Gpio = require('pigpio').Gpio;
var x = new Gpio(17, {mode: Gpio.INPUT});
var y = new Gpio(18, {mode: Gpio.INPUT});
var button = new Gpio(27, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.RISING_EDGE});

console.log('Warning: no analog inputs on the Raspberry Pi!\nThis program just reads the button on pin GPIO27.');

button.on('interrupt', function (level) {
  console.log('button pressed.');
});
