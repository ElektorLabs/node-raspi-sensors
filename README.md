# node-raspi-sensors
This repository shows how to use the 37 sensors from our kit with Node.js on the Raspberry Pi.
This is work in progress and we are adding more examples every day.

This is the hardware that you need:
https://www.elektor.de/arduino-sensor-kit

## Installation

Just download the repository as a ZIP file and unpack it, or even better: use git:
```
git clone https://github.com/ElektorLabs/node-raspi-sensors.git
```

The examples are written in Javascript and thus, you need to install Node.JS on your Pi.
Then you can use npm for installing the packages for every single example.

For example, this installs everything for the button:
```
cd button
npm install
```

## Running

In order to start an example, use node with superuser power:

```
cd button
sudo node index.js
```

