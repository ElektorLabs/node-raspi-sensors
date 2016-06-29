KY-001

DS18B20 1-Wire tenperature sensor.

# Hardware setup

Connect G to GND, R to 3V3, and Y to GPIO4

# Modify boot config file
You need to enable 1-wire support for Raspbian Jesse. Edit the config file:

```
sudo nano /boot/config.txt
```

and add this line to the bottom:

```
dtoverlay=w1-gpio,gpiopin=4,pullup=on
```

Then reboot the Pi.

# Ìnstall packages

Install the packages with npm:

```
npm install
```

And just to be sure:

```
sudo modprobe wire
sudo modprobe w1-gpio pullup=1
sudo modprobe w1-therm
```

Then you can run the example:

```
sudo node index.js
```

At the first run, this will show the ID of your sensor.
Edit index.js and replace the ID with the one of your sensor.
Rerun the program and it will read the temperature every second.

