const utils = require('../utils');

const electrical_components = {
  active() {
    return utils.draw(["Diode", "LED", "Rectifier", "Transistor", "JFET", "MOSFET", "Integrated Circuit", "LCD", "Cathode Ray Tube", "Vacuum Tube", "Battery", "Fuel Cell", "Power Supply"])
  },
  passive() {
    return utils.draw(["Resistor", "Potentiometer", "Trim Pot", "Varistor", "Capacitor", "Varicap Diode", "Inductor", "Transformer", "Generator", "Motor", "Solenoid", "Magnetic Amplifier", "Speaker", "Motion Sensor", "Accelerometer", "Thermocouple", "Antenna", "Oscillator", "Breadboard"])
  },
  electromechanical() {
    return utils.draw(["Piezoelectric device", "crystal", "Ultrasonic Motor", "Terminal", "Socket", "Power Cord", "Toggle Switch", "Slide Switch", "DIP Switch", "Footswitch", "Keypad", "Circuit Breaker", "Fuse", "Printed Circuit Board"])
  },
};

module.exports = electrical_components

