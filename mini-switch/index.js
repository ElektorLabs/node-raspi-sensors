var Gpio = require('pigpio').Gpio;
var button = new Gpio(27, {mode: Gpio.INPUT, pullUpDown: Gpio.PUD_UP, edge: Gpio.FALLING_EDGE});

console.log('This program reads a Reed switch on pin GPIO27. The pin uses a pull-up resistor');

button.on('interrupt', function (level) {
  console.log('button pressed.');
});
