# Simple Lie Detector - Arduino GSR Response Demo

This is an educational electronics project. It observes **galvanic skin response (GSR)**: a change in skin conductivity that can be associated with arousal, stress, movement, temperature, or many other factors. It cannot determine whether a person is lying, and it must not be used to judge, accuse, screen, or make decisions about people.

## What it does

1. Press the calibration button while the user is relaxed and holding the GSR electrodes.
2. The Arduino averages readings to form a personal baseline.
3. It continuously filters new readings and compares them with that baseline.
4. When the difference passes a configurable threshold, the LCD shows `RESPONSE CHANGE` and the buzzer chirps.

## Parts required

- Arduino Uno (or compatible board)
- Analog GSR sensor module with finger electrodes
- 16x2 parallel LCD compatible with the `LiquidCrystal` library
- Active buzzer
- Push button
- 10 kOhm resistor for the button pull-down
- Breadboard and jumper wires

## Wiring

| Part | Arduino pin | Notes |
| --- | --- | --- |
| GSR sensor AO | A0 | Sensor VCC to 5V and GND to GND |
| LCD RS | D12 | |
| LCD Enable | D11 | |
| LCD D4, D5, D6, D7 | D5, D4, D3, D2 | LCD VSS to GND, VDD to 5V; use a contrast potentiometer if needed |
| Buzzer positive | D8 | Buzzer negative to GND |
| Calibration button | D7 | Other button leg goes to 5V; 10 kOhm resistor from D7 to GND |

## Run it

1. Open `lie_detector.ino` in the Arduino IDE.
2. Select **Arduino Uno** and the correct serial port.
3. Upload the sketch.
4. Fit the electrodes snugly, stay still, and press **CALIBRATE**.
5. Wait for the LCD to display `MONITORING`. The display will show filtered GSR values and their change from baseline.

## Tuning

- `CHANGE_THRESHOLD` defaults to `35`. Raise it if normal movement causes repeated alerts; lower it if the project is not responsive enough.
- `CALIBRATION_SAMPLES` defaults to `100` (about 10 seconds). Increase it for a more stable baseline.
- Ask the user to remain still during calibration. GSR sensors are sensitive to electrode contact and motion.

## Project report points

- **Objective:** Build a low-cost embedded system to demonstrate measurement, calibration, filtering, and threshold-triggered feedback using a biosensor.
- **Inputs:** Analog GSR signal and manual calibration button.
- **Processing:** Averaging for baseline calibration and exponential moving-average filtering for live readings.
- **Outputs:** 16x2 LCD status/data display and buzzer alert.
- **Future scope:** Log anonymised readings to an SD card, show charts in a serial dashboard, or use Bluetooth for monitoring - with informed consent.
