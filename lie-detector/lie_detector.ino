#include <LiquidCrystal.h>

// Educational GSR response demo. GSR variation is not evidence of lying.
const byte GSR_PIN = A0;
const byte BUZZER_PIN = 8;
const byte CALIBRATE_PIN = 7;
const int CALIBRATION_SAMPLES = 100;
const int SAMPLE_DELAY_MS = 100;
const int CHANGE_THRESHOLD = 35;
const float FILTER_ALPHA = 0.16;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
float baseline = 0;
float filteredValue = 0;
bool isMonitoring = false;
unsigned long lastSampleAt = 0;
unsigned long lastAlertAt = 0;

void showCentered(const char* top, const char* bottom) {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(top);
  lcd.setCursor(0, 1);
  lcd.print(bottom);
}

void calibrate() {
  showCentered("Stay still...", "Calibrating");
  long total = 0;
  for (int sample = 0; sample < CALIBRATION_SAMPLES; sample++) {
    total += analogRead(GSR_PIN);
    lcd.setCursor(0, 1);
    lcd.print("Progress: ");
    lcd.print((sample + 1) * 100 / CALIBRATION_SAMPLES);
    lcd.print("%   ");
    delay(SAMPLE_DELAY_MS);
  }
  baseline = (float)total / CALIBRATION_SAMPLES;
  filteredValue = baseline;
  isMonitoring = true;
  showCentered("Baseline ready", "Monitoring...");
  tone(BUZZER_PIN, 1100, 120);
  delay(900);
}

void showReading(int current, int difference) {
  lcd.setCursor(0, 0);
  lcd.print("GSR:"); lcd.print(current); lcd.print(" Base:"); lcd.print((int)baseline); lcd.print("  ");
  lcd.setCursor(0, 1);
  if (abs(difference) >= CHANGE_THRESHOLD) {
    lcd.print("RESPONSE CHANGE ");
    if (millis() - lastAlertAt > 1400) { tone(BUZZER_PIN, 1500, 180); lastAlertAt = millis(); }
  } else {
    lcd.print("Stable  Delta:");
    if (difference >= 0) lcd.print('+');
    lcd.print(difference); lcd.print("   ");
  }
}

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(CALIBRATE_PIN, INPUT);
  lcd.begin(16, 2);
  showCentered("GSR RESPONSE", "Press calibrate");
}

void loop() {
  if (digitalRead(CALIBRATE_PIN) == HIGH) {
    delay(40);
    if (digitalRead(CALIBRATE_PIN) == HIGH) {
      calibrate();
      while (digitalRead(CALIBRATE_PIN) == HIGH) delay(10);
    }
  }
  if (!isMonitoring || millis() - lastSampleAt < SAMPLE_DELAY_MS) return;
  lastSampleAt = millis();
  int rawValue = analogRead(GSR_PIN);
  filteredValue = FILTER_ALPHA * rawValue + (1.0 - FILTER_ALPHA) * filteredValue;
  int currentValue = (int)filteredValue;
  showReading(currentValue, currentValue - (int)baseline);
}
