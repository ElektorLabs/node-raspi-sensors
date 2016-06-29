var Gpio = require('pigpio').Gpio;
var button = new Gpio(27, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.RISING_EDGE});

console.log('This program reads a button on pin GPIO27.');

button.on('interrupt', function (level) {
  console.log('button pressed.');
});
