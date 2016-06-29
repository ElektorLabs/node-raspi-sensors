var Gpio = require('pigpio').Gpio;
var d0 = new Gpio(27, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.RISING_EDGE});

console.log('This program reads a button on pin GPIO27.');

d0.on('interrupt', function (level) {
  console.log('flame detected.');
});
